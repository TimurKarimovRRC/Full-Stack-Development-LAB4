import type { Department } from "../../../types/department";
import styles from "./Employees.module.css";

interface EmployeesProps {
    departments: Department[];
}

export function Employees({ departments }: EmployeesProps) {
    return (
        <main>
            {departments.map((department) => (
                <section
                    key={department.name}
                    className={styles.department}
                >
                    <h2>{department.name}</h2>

                    <ul>
                        {department.employees.map((employee, index) => (
                            <li
                                key={`${employee.firstName}-${employee.lastName ?? ""}-${index}`}
                            >
                                {employee.firstName} {employee.lastName}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}