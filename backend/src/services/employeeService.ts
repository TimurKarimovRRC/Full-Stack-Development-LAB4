import { employeeRepo } from "../repositories/employeeRepo.js";

export function getDepartments() {
    return employeeRepo.getDepartments();
}