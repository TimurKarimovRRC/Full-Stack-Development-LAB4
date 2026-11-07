import departmentData from "../data/departments.js";
import type { Department } from "../types/department.js";

const departments: Department[] = structuredClone(departmentData);

export const employeeRepo = {
    getDepartments(): Department[] {
        return structuredClone(departments);
    },
};