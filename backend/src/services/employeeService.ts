import { employeeRepo } from "../repositories/employeeRepo.js";

export function getDepartments() {
    return employeeRepo.getDepartments();
}

export function createEmployee(body: unknown) {
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return { errors: ["Please send employee details."] };
    }

    if (!("firstName" in body) || typeof body.firstName !== "string") {
        return { errors: ["Please enter a first name."] };
    }

    const firstName = body.firstName.trim();

    if (firstName.length < 3) {
        return { errors: ["First name must be at least three characters."] };
    }

    if (!("departmentName" in body) || typeof body.departmentName !== "string") {
        return { errors: ["Please select an existing department."] };
    }

    let lastName: string | undefined;

    if ("lastName" in body) {
        if (typeof body.lastName !== "string") {
            return { errors: ["Last name must be text."] };
        }

        lastName = body.lastName.trim() || undefined;
    }

    const added = employeeRepo.addEmployee(
        body.departmentName.trim(),
        { firstName, lastName }
    );

    if (!added) {
        return { errors: ["Please select an existing department."] };
    }

    return { departments: employeeRepo.getDepartments() };
}