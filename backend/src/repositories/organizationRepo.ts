import { prisma } from "../db/prisma.js";
import type { Employee } from "../types/employee.js";
import type { Role } from "../types/role.js";

type AssignmentResult = "created" | "filled" | "occupied";

export const organizationRepo = {
    async getRoles(): Promise<Role[]> {
        const roles = await prisma.role.findMany({
            orderBy: [{ title: "asc" }, { id: "asc" }],
            select: {
                id: true,
                title: true,
                employee: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });

        return roles.map((role) => ({
            id: role.id,
            title: role.title,
            employee: role.employee
                ? {
                      id: role.employee.id,
                      firstName: role.employee.firstName,
                      lastName: role.employee.lastName ?? undefined,
                  }
                : undefined,
        }));
    },

    async assignEmployee(
        title: string,
        employee: Employee
    ): Promise<AssignmentResult> {
        for (let attempt = 1; ; attempt++) {
            try {
                return await prisma.$transaction(async (db): Promise<AssignmentResult> => {
                    const roles = await db.role.findMany({
                        orderBy: { id: "asc" },
                        select: { id: true, title: true, employeeId: true },
                    });

                    const matchingRoles = roles.filter(
                        (role) => role.title.trim().toLowerCase() === title.toLowerCase()
                    );

                    if (matchingRoles.some((role) => role.employeeId !== null)) {
                        return "occupied";
                    }

                    const person = {
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                    };

                    const vacantRole = matchingRoles[0];

                    if (vacantRole) {
                        await db.role.update({
                            where: { id: vacantRole.id },
                            data: { employee: { create: person } },
                        });

                        return "filled";
                    }

                    await db.role.create({
                        data: {
                            title,
                            employee: { create: person },
                        },
                    });

                    return "created";
                }, { isolationLevel: "Serializable" });
            } catch (error) {
                const canRetry =
                    attempt < 3 &&
                    error instanceof Error &&
                    "code" in error &&
                    error.code === "P2034";

                if (!canRetry) throw error;
            }
        }
    },
};