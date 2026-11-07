import { useState } from "react";
import type { FormEvent } from "react";
import type { Department } from "../types/department";
import { useFormInput } from "./useFormInput";
import * as employeeService from "../services/employeeService";

export function useEmployees() {
    const [departments, setDepartments] = useState<Department[]>(
        employeeService.getDepartments
    );

    const [errors, setErrors] = useState<string[]>([]);

    const firstName = useFormInput();
    const lastName = useFormInput();
    const departmentName = useFormInput();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrors([]);

        const firstNameValidation = firstName.validate((value) =>
            employeeService.validateInput(value, "firstName")
        );

        const lastNameValidation = lastName.validate((value) =>
            employeeService.validateInput(value, "lastName")
        );

        const departmentValidation = departmentName.validate((value) =>
            employeeService.validateInput(value, "departmentName")
        );

        if (
            !firstNameValidation.isValid ||
            !lastNameValidation.isValid ||
            !departmentValidation.isValid
        ) {
            return;
        }

        const result = employeeService.createEmployee(
            {
                firstName: firstName.value,
                lastName: lastName.value,
            },
            departmentName.value
        );

        if (!result.isValid) {
            setErrors(result.errors);
            return;
        }

        setDepartments(result.departments);

        firstName.reset();
        lastName.reset();
        departmentName.reset();
    }

    return {
        departments,
        firstName,
        lastName,
        departmentName,
        errors,
        handleSubmit,
    };
}