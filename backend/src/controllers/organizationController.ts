import type { Request, Response } from "express";
import * as organizationService from "../services/organizationService.js";

export async function getRoles(_request: Request, response: Response) {
    const roles = await organizationService.getRoles();
    response.json(roles);
}

export async function createRole(request: Request, response: Response) {
    const result = await organizationService.createRole(request.body);

    if ("errors" in result) {
        response.status(result.status).json({ errors: result.errors });
        return;
    }

    response.status(result.status).json(result.roles);
}