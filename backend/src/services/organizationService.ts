import { organizationRepo } from "../repositories/organizationRepo.js";
import type { Role } from "../types/role.js";

type RoleResult =
    | { status: 200 | 201; roles: Role[] }
    | { status: 400 | 409; errors: string[] };

export function getRoles() {
    return organizationRepo.getRoles();
}

export async function createRole(body: unknown): Promise<RoleResult> {
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

    const result = await organizationRepo.assignEmployee(
        body.title.trim(),
        { firstName, lastName }
    );

    if (result === "occupied") {
        return { status: 409, errors: ["This role is already occupied."] };
    }

    return {
        status: result === "created" ? 201 : 200,
        roles: await organizationRepo.getRoles(),
    };
}