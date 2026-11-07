import type { Department } from "../types/department";
import type { Employee } from "../types/employee";

async function readDepartments(response: Response): Promise<Department[]> {
    if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.errors?.[0] ?? "Could not reach the employee API.");
    }

    return response.json();
}

export const employeeRepo = {
    async getDepartments(signal?: AbortSignal): Promise<Department[]> {
        const response = await fetch("/api/departments", { signal });
        return readDepartments(response);
    },

    async createEmployee(employee: Employee, departmentName: string): Promise<Department[]> {
        const response = await fetch("/api/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...employee, departmentName }),
        });

        return readDepartments(response);
    },
};