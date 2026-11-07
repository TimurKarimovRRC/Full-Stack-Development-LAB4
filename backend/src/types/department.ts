import type { Employee } from "./employee.js";

export interface Department {
    name: string,
    employees: Employee[]
}