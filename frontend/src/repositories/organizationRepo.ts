import { Guid } from "guid-typescript";
import { roleData } from "../data/roles";
import type { Role } from "../types/role";
import type { Employee } from "../types/employee";

let roles: Role[] = structuredClone(roleData);

export const organizationRepo = {
    getRoles(): Role[] {
        return structuredClone(roles);
    },

    createRole(
        title: string,
        employee?: Employee
    ): Role[] {
        const newRole: Role = {
            id: Guid.create().toString(),
            title,
            employee: employee ? { ...employee } : undefined,
        };

        roles = [...roles, newRole];

        return structuredClone(roles);
    },

    updateRole(updatedRole: Role): Role[] {
        roles = roles.map((role) => {
            if (role.id === updatedRole.id) {
                return structuredClone(updatedRole);
            }

            return role;
        });

        return structuredClone(roles);
    },

    deleteRole(id: string): Role[] {
        roles = roles.filter((role) => role.id !== id);

        return structuredClone(roles);
    },
};