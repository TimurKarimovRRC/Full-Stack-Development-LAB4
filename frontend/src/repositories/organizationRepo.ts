import type { Employee } from "../types/employee";
import type { Role } from "../types/role";

async function readRoles(response: Response): Promise<Role[]> {
    if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.errors?.[0] ?? "Could not load or save roles.");
    }

    return response.json();
}

export const organizationRepo = {
    async getRoles(signal?: AbortSignal): Promise<Role[]> {
        const response = await fetch("/api/roles", { signal });
        return readRoles(response);
    },

    async createRole(employee: Employee, title: string): Promise<Role[]> {
        const response = await fetch("/api/roles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...employee, title }),
        });

        return readRoles(response);
    },
};