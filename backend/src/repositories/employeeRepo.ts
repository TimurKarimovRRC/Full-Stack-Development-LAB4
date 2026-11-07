import departmentData from "../data/departments.js";
import type { Department } from "../types/department.js";
import type { Employee } from "../types/employee.js";

const departments: Department[] = structuredClone(departmentData);

export const employeeRepo = {
    getDepartments(): Department[] {
        return structuredClone(departments);
    },

    addEmployee(departmentName: string, employee: Employee): boolean {
        const department = departments.find(
            (item) => item.name === departmentName
        );

        if (!department) {
            return false;
        }

        department.employees.push({ ...employee });
        return true;
    },
};