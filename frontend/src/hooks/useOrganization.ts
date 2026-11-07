import { useEffect, useState, type FormEvent } from "react";
import type { Role } from "../types/role";
import { useFormInput } from "./useFormInput";
import * as organizationService from "../services/organizationService";

function errorMessage(error: unknown): string {
    return error instanceof Error ? error.message : "Unable to contact the server.";
}

export function useOrganization() {
    const [roles, setRoles] = useState<Role[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    const firstName = useFormInput();
    const lastName = useFormInput();
    const roleTitle = useFormInput();

    useEffect(() => {
        const controller = new AbortController();

        organizationService.getRoles(controller.signal)
            .then(setRoles)
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
            organizationService.validateInput(value, "firstName")
        );

        const roleCheck = roleTitle.validate((value) =>
            organizationService.validateInput(value, "title")
        );

        if (!nameCheck.isValid || !roleCheck.isValid) return;

        try {
            const updatedRoles = await organizationService.createRole(
                { firstName: firstName.value, lastName: lastName.value },
                roleTitle.value
            );

            setRoles(updatedRoles);
            firstName.reset();
            lastName.reset();
            roleTitle.reset();
        } catch (error) {
            setErrors([errorMessage(error)]);
        }
    }

    return { roles, firstName, lastName, roleTitle, errors, handleSubmit };
}