import { useState } from "react";
import type { FormEvent } from "react";
import type { Role } from "../types/role";
import { useFormInput } from "./useFormInput";
import * as organizationService from "../services/organizationService";

export function useOrganization() {
    const [roles, setRoles] = useState<Role[]>(
        organizationService.getRoles
    );

    const [errors, setErrors] = useState<string[]>([]);

    const firstName = useFormInput();
    const lastName = useFormInput();
    const roleTitle = useFormInput();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErrors([]);

        const firstNameValidation = firstName.validate((value) =>
            organizationService.validateInput(value, "firstName")
        );

        const lastNameValidation = lastName.validate((value) =>
            organizationService.validateInput(value, "lastName")
        );

        const roleValidation = roleTitle.validate((value) =>
            organizationService.validateInput(value, "title")
        );

        if (
            !firstNameValidation.isValid ||
            !lastNameValidation.isValid ||
            !roleValidation.isValid
        ) {
            return;
        }

        const result = organizationService.createRole(
            {
                firstName: firstName.value,
                lastName: lastName.value,
            },
            roleTitle.value
        );

        if (!result.isValid) {
            setErrors(result.errors);
            return;
        }

        setRoles(result.roles);

        firstName.reset();
        lastName.reset();
        roleTitle.reset();
    }

    return {
        roles,
        firstName,
        lastName,
        roleTitle,
        errors,
        handleSubmit,
    };
}