import { prisma } from "../db/prisma.js";
import type { Department } from "../types/department.js";
import type { Employee } from "../types/employee.js";

export const employeeRepo = {
    async getDepartments(): Promise<Department[]> {
        const departments = await prisma.department.findMany({
            orderBy: { name: "asc" },
            select: {
                name: true,
                employees: {
                    orderBy: [
                        { firstName: "asc" },
                        { lastName: "asc" },
                    ],
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });

        return departments.map((department) => ({
            name: department.name,
            employees: department.employees.map((employee) => ({
                id: employee.id,
                firstName: employee.firstName,
                lastName: employee.lastName ?? undefined,
            })),
        }));
    },

    async addEmployee(
        departmentName: string,
        employee: Employee
    ): Promise<boolean> {
        const department = await prisma.department.findUnique({
            where: { name: departmentName },
            select: { id: true },
        });

        if (!department) {
            return false;
        }

        await prisma.employee.create({
            data: {
                firstName: employee.firstName,
                lastName: employee.lastName,
                departmentId: department.id,
            },
        });

        return true;
    },
};