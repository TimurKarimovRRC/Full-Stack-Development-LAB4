import type { Request, Response } from "express";
import * as employeeService from "../services/employeeService.js";

export async function getDepartments(_request: Request, response: Response) {
    const departments = await employeeService.getDepartments();
    response.json(departments);
}

export async function createEmployee(request: Request, response: Response) {
    const result = await employeeService.createEmployee(request.body);

    if (result.errors) {
        response.status(400).json({ errors: result.errors });
        return;
    }

    response.status(201).json(result.departments);
}