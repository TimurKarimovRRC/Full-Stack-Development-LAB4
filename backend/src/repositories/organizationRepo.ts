import { Guid } from "guid-typescript";
import { roleData } from "../data/roles.js";
import type { Employee } from "../types/employee.js";
import type { Role } from "../types/role.js";

const roles: Role[] = structuredClone(roleData);

export const organizationRepo = {
    getRoles(): Role[] {
        return structuredClone(roles);
    },

    createRole(title: string, employee: Employee): void {
        roles.push({
            id: Guid.create().toString(),
            title,
            employee: { ...employee },
        });
    },

    fillRole(id: string, employee: Employee): void {
        const role = roles.find((item) => item.id === id);

        if (!role) {
            throw new Error("Role not found.");
        }

        role.employee = { ...employee };
    },
};