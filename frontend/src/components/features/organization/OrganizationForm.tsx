import type { FormEvent } from "react";

interface FormField {
    value: string;
    setValue: (value: string) => void;
    messages: string[];
}

interface OrganizationFormProps {
    firstName: FormField;
    lastName: FormField;
    roleTitle: FormField;
    errors: string[];
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function OrganizationForm({
    firstName,
    lastName,
    roleTitle,
    errors,
    onSubmit,
}: OrganizationFormProps) {
    return (
        <section>
            <h2>Add Person to Organization</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="organization-firstName">
                        First Name
                    </label>

                    <input
                        id="organization-firstName"
                        type="text"
                        value={firstName.value}
                        onChange={(event) =>
                            firstName.setValue(event.target.value)
                        }
                        aria-invalid={firstName.messages.length > 0}
                        aria-describedby="organization-firstName-messages"
                    />

                    <div
                        id="organization-firstName-messages"
                        aria-live="polite"
                    >
                        {firstName.messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="organization-lastName">
                        Last Name
                    </label>

                    <input
                        id="organization-lastName"
                        type="text"
                        value={lastName.value}
                        onChange={(event) =>
                            lastName.setValue(event.target.value)
                        }
                        aria-invalid={lastName.messages.length > 0}
                        aria-describedby="organization-lastName-messages"
                    />

                    <div
                        id="organization-lastName-messages"
                        aria-live="polite"
                    >
                        {lastName.messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="organization-role">
                        Role
                    </label>

                    <input
                        id="organization-role"
                        type="text"
                        value={roleTitle.value}
                        onChange={(event) =>
                            roleTitle.setValue(event.target.value)
                        }
                        aria-invalid={roleTitle.messages.length > 0}
                        aria-describedby="organization-role-messages"
                    />

                    <div
                        id="organization-role-messages"
                        aria-live="polite"
                    >
                        {roleTitle.messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                </div>

                <div aria-live="polite">
                    {errors.map((message) => (
                        <p key={message}>{message}</p>
                    ))}
                </div>

                <button type="submit">
                    Add Person
                </button>
            </form>
        </section>
    );
}