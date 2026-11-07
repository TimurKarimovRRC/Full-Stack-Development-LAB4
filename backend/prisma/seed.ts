import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";
import departmentData from "../src/data/departments.js";
import { roleData } from "../src/data/roles.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is missing.");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
    await prisma.$transaction(async (db) => {
        const departmentCount = await db.department.count();
        const employeeCount = await db.employee.count();
        const roleCount = await db.role.count();

        if (departmentCount > 0 || employeeCount > 0 || roleCount > 0) {
            console.log("Seed skipped: the database already contains records.");
            return;
        }

        for (const department of departmentData) {
            await db.department.create({
                data: {
                    name: department.name,
                    employees: {
                        create: department.employees.map((employee) => ({
                            firstName: employee.firstName,
                            lastName: employee.lastName,
                        })),
                    },
                },
            });
        }

        for (const role of roleData) {
            await db.role.create({
                data: {
                    title: role.title,
                    employee: role.employee
                        ? {
                              create: {
                                  firstName: role.employee.firstName,
                                  lastName: role.employee.lastName,
                              },
                          }
                        : undefined,
                },
            });
        }
    });
}

try {
    await seed();

    console.log("Departments:", await prisma.department.count());
    console.log("Employees:", await prisma.employee.count());
    console.log("Roles:", await prisma.role.count());
    console.log("Vacant roles:", await prisma.role.count({
        where: { employeeId: null },
    }));
} catch (error) {
    console.error(error);
    process.exitCode = 1;
} finally {
    await prisma.$disconnect();
}