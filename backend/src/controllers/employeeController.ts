import type { Request, Response } from "express";
import * as employeeService from "../services/employeeService.js";

export function getDepartments(_request: Request, response: Response) {
    response.json(employeeService.getDepartments());
}

export function createEmployee(request: Request, response: Response) {
    const result = employeeService.createEmployee(request.body);

    if (result.errors) {
        response.status(400).json({ errors: result.errors });
        return;
    }

    response.status(201).json(result.departments);
}