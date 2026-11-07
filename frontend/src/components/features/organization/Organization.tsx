import { useOrganization } from "../../../hooks/useOrganization";
import { OrganizationForm } from "./OrganizationForm";

export function Organization() {
    const {
        roles,
        firstName,
        lastName,
        roleTitle,
        errors,
        handleSubmit,
    } = useOrganization();

    return (
        <>
            <section>
                <h2 id="organization-heading">
                    Leadership and Management
                </h2>

                <table aria-labelledby="organization-heading">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id}>
                                <td>
                                    {role.employee
                                        ? `${role.employee.firstName} ${
                                              role.employee.lastName ?? ""
                                          }`.trim()
                                        : "Vacant"}
                                </td>

                                <td>{role.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <OrganizationForm
                firstName={firstName}
                lastName={lastName}
                roleTitle={roleTitle}
                errors={errors}
                onSubmit={handleSubmit}
            />
        </>
    );
}