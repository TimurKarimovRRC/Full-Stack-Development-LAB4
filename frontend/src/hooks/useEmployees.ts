import { useEffect, useState, type FormEvent } from "react";
import type { Department } from "../types/department";
import { useFormInput } from "./useFormInput";
import * as employeeService from "../services/employeeService";

function errorMessage(error: unknown): string {
    return error instanceof Error ? error.message : "Unable to contact the server.";
}

export function useEmployees() {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    const firstName = useFormInput();
    const lastName = useFormInput();
    const departmentName = useFormInput();

    useEffect(() => {
        const controller = new AbortController();

        employeeService.getDepartments(controller.signal)
            .then(setDepartments)
            .catch((error: unknown) => {
                if (!controller.signal.aborted) {
                    setErrors([errorMessage(error)]);
                }
            });

        return () => controller.abort();
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrors([]);

        const nameCheck = firstName.validate((value) =>
            employeeService.validateInput(value, "firstName")
        );
        const departmentCheck = departmentName.validate((value) =>
            employeeService.validateInput(value, "departmentName")
        );

        if (!nameCheck.isValid || !departmentCheck.isValid) return;

        try {
            const updated = await employeeService.createEmployee(
                { firstName: firstName.value, lastName: lastName.value },
                departmentName.value
            );

            setDepartments(updated);
            firstName.reset();
            lastName.reset();
            departmentName.reset();
        } catch (error) {
            setErrors([errorMessage(error)]);
        }
    }

    return { departments, firstName, lastName, departmentName, errors, handleSubmit };
}