import { organizationRepo } from "../repositories/organizationRepo.js";
import type { Role } from "../types/role.js";

type RoleResult =
    | { status: 200 | 201; roles: Role[] }
    | { status: 400 | 409; errors: string[] };

export function getRoles() {
    return organizationRepo.getRoles();
}

export function createRole(body: unknown): RoleResult {
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return { status: 400, errors: ["Please send role details."] };
    }

    if (!("firstName" in body) || typeof body.firstName !== "string") {
        return { status: 400, errors: ["Please enter a first name."] };
    }

    const firstName = body.firstName.trim();

    if (firstName.length < 3) {
        return {
            status: 400,
            errors: ["First name must be at least three characters."],
        };
    }

    if (!("title" in body) || typeof body.title !== "string" || !body.title.trim()) {
        return { status: 400, errors: ["Please enter a role."] };
    }

    let lastName: string | undefined;

    if ("lastName" in body) {
        if (typeof body.lastName !== "string") {
            return { status: 400, errors: ["Last name must be text."] };
        }

        lastName = body.lastName.trim() || undefined;
    }

    const title = body.title.trim();
    const employee = { firstName, lastName };

    const matchingRoles = organizationRepo.getRoles().filter(
        (role) => role.title.trim().toLowerCase() === title.toLowerCase()
    );

    if (matchingRoles.some((role) => role.employee !== undefined)) {
        return { status: 409, errors: ["This role is already occupied."] };
    }

    const vacantRole = matchingRoles[0];

    if (vacantRole) {
        organizationRepo.fillRole(vacantRole.id, employee);
        return { status: 200, roles: organizationRepo.getRoles() };
    }

    organizationRepo.createRole(title, employee);
    return { status: 201, roles: organizationRepo.getRoles() };
}