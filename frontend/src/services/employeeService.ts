import { employeeRepo } from "../repositories/employeeRepo";
import type { Employee } from "../types/employee";

export function validateInput(
    value: string,
    field: "firstName" | "lastName" | "departmentName"
) {
    const errors: string[] = [];

    if (field === "firstName" && value.trim().length < 3) {
        errors.push(
            "First name must be at least three characters."
        );
    }

    if (field === "departmentName") {
        const departments = employeeRepo.getDepartments();

        const departmentExists = departments.some(
            (department) => department.name === value
        );

        if (!departmentExists) {
            errors.push(
                "Please select an existing department."
            );
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

export function createEmployee(
    employee: Employee,
    departmentName: string
) {
    const firstNameValidation = validateInput(
        employee.firstName,
        "firstName"
    );

    const departmentValidation = validateInput(
        departmentName,
        "departmentName"
    );

    const errors = [
        ...firstNameValidation.errors,
        ...departmentValidation.errors,
    ];

    if (errors.length > 0) {
        return {
            isValid: false,
            errors,
            departments: employeeRepo.getDepartments(),
        };
    }

    const newEmployee: Employee = {
        firstName: employee.firstName.trim(),
        lastName: employee.lastName?.trim() || undefined,
    };

    const departments = employeeRepo.createEmployee(
        newEmployee,
        departmentName
    );

    return {
        isValid: true,
        errors: [],
        departments,
    };
}
export function getDepartments() {
    return employeeRepo.getDepartments();
}