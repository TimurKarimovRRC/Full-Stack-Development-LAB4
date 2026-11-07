import type { Request, Response } from "express";
import * as employeeService from "../services/employeeService.js";

export function getDepartments(_request: Request, response: Response) {
    const departments = employeeService.getDepartments();
    response.json(departments);
}