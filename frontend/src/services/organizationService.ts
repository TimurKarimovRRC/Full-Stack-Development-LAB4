import { organizationRepo } from "../repositories/organizationRepo";
import type { Employee } from "../types/employee";
import * as employeeService from "./employeeService";

export function validateInput(
    value: string,
    field: "firstName" | "lastName" | "title"
) {
    if (field !== "title") {
        return employeeService.validateInput(value, field);
    }

    const errors: string[] = [];

    if (!value.trim()) {
        errors.push("Please enter a role.");
    }

    return { isValid: errors.length === 0, errors };
}

export function getRoles(signal?: AbortSignal) {
    return organizationRepo.getRoles(signal);
}

export function createRole(employee: Employee, title: string) {
    return organizationRepo.createRole(employee, title);
}