import type { FormEvent } from "react";
import type { Department } from "../../../types/department";

interface FormField {
    value: string;
    setValue: (value: string) => void;
    messages: string[];
}

interface EmployeeFormProps {
    departments: Department[];
    firstName: FormField;
    lastName: FormField;
    departmentName: FormField;
    errors: string[];
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function EmployeeForm({
    departments,
    firstName,
    lastName,
    departmentName,
    errors,
    onSubmit,
}: EmployeeFormProps) {
    return (
        <section>
            <h2>Add Employee</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName">
                        First Name
                    </label>

                    <input
                        id="firstName"
                        type="text"
                        value={firstName.value}
                        onChange={(event) =>
                            firstName.setValue(event.target.value)
                        }
                        aria-invalid={firstName.messages.length > 0}
                        aria-describedby="firstName-messages"
                    />

                    <div id="firstName-messages" aria-live="polite">
                        {firstName.messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName">
                        Last Name
                    </label>

                    <input
                        id="lastName"
                        type="text"
                        value={lastName.value}
                        onChange={(event) =>
                            lastName.setValue(event.target.value)
                        }
                        aria-invalid={lastName.messages.length > 0}
                        aria-describedby="lastName-messages"
                    />

                    <div id="lastName-messages" aria-live="polite">
                        {lastName.messages.map((message) => (
                            <p key={message}>{message}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="department">
                        Department
                    </label>

                    <select
                        id="department"
                        value={departmentName.value}
                        onChange={(event) =>
                            departmentName.setValue(event.target.value)
                        }
                        aria-invalid={departmentName.messages.length > 0}
                        aria-describedby="department-messages"
                    >
                        <option value="">
                            Select a department
                        </option>

                        {departments.map((department) => (
                            <option
                                key={department.name}
                                value={department.name}
                            >
                                {department.name}
                            </option>
                        ))}
                    </select>

                    <div id="department-messages" aria-live="polite">
                        {departmentName.messages.map((message) => (
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
                    Add Employee
                </button>
            </form>
        </section>
    );
}