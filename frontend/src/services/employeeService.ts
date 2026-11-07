import { employeeRepo } from "../repositories/employeeRepo";
import type { Employee } from "../types/employee";

export function validateInput(
    value: string,
    field: "firstName" | "lastName" | "departmentName"
) {
    const errors: string[] = [];

    if (field === "firstName" && value.trim().length < 3) {
        errors.push("First name must be at least three characters.");
    }

    if (field === "departmentName" && !value.trim()) {
        errors.push("Please select a department.");
    }

    return { isValid: errors.length === 0, errors };
}

export function getDepartments(signal?: AbortSignal) {
    return employeeRepo.getDepartments(signal);
}

export function createEmployee(employee: Employee, departmentName: string) {
    return employeeRepo.createEmployee(employee, departmentName);
}