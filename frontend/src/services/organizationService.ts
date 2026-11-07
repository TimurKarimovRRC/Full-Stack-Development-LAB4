import { organizationRepo } from "../repositories/organizationRepo";
import * as employeeService from "./employeeService";
import type { Employee } from "../types/employee";

export function validateInput(
    value: string,
    field: "firstName" | "lastName" | "title"
) {
    if (field !== "title") {
        return employeeService.validateInput(value, field);
    }

    const errors: string[] = [];
    const title = value.trim();

    if (title.length === 0) {
        errors.push("Please enter a role.");
    } else {
        const roles = organizationRepo.getRoles();

        const roleIsOccupied = roles.some(
            (role) =>
                role.title.trim().toLowerCase() === title.toLowerCase() &&
                role.employee !== undefined
        );

        if (roleIsOccupied) {
            errors.push("This role is already occupied.");
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

export function createRole(
    employee: Employee,
    title: string
) {
    const firstNameValidation = validateInput(
        employee.firstName,
        "firstName"
    );

    const roleValidation = validateInput(title, "title");

    const errors = [
        ...firstNameValidation.errors,
        ...roleValidation.errors,
    ];

    if (errors.length > 0) {
        return {
            isValid: false,
            errors,
            roles: organizationRepo.getRoles(),
        };
    }

    const newEmployee: Employee = {
        firstName: employee.firstName.trim(),
        lastName: employee.lastName?.trim() || undefined,
    };

    const existingRole = organizationRepo.getRoles().find(
        (role) =>
            role.title.trim().toLowerCase() === title.trim().toLowerCase()
    );

    if (existingRole) {
        const roles = organizationRepo.updateRole({
            ...existingRole,
            employee: newEmployee,
        });

        return {
            isValid: true,
            errors: [],
            roles,
        };
    }

    const roles = organizationRepo.createRole(
        title.trim(),
        newEmployee
    );

    return {
        isValid: true,
        errors: [],
        roles,
    };
}
export function getRoles() {
    return organizationRepo.getRoles();
}