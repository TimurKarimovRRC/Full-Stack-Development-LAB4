import { roleData } from "../data/roles.js";
import type { Role } from "../types/role.js";

const roles: Role[] = structuredClone(roleData);

export const organizationRepo = {
    getRoles(): Role[] {
        return structuredClone(roles);
    },
};