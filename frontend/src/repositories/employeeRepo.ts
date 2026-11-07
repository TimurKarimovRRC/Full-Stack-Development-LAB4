import departmentData from "../data/departments";
import type { Department } from "../types/department";
import type { Employee } from "../types/employee";

let departments: Department[] = structuredClone(departmentData);

export const employeeRepo = {
    getDepartments(): Department[] {
        return structuredClone(departments);
    },

    createEmployee(
        employee: Employee,
        departmentName: string
    ): Department[] {
        departments = departments.map((department) => {
            if (department.name === departmentName) {
                return {
                    ...department,
                    employees: [
                        ...department.employees,
                        { ...employee },
                    ],
                };
            }

            return department;
        });

        return structuredClone(departments);
    },
};