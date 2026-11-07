import type { Employee } from "./employee.js";

export interface Role {
    id: string;
    title: string;
    employee?: Employee;
}