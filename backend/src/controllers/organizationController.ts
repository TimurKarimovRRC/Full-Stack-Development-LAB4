import type { Request, Response } from "express";
import * as organizationService from "../services/organizationService.js";

export function getRoles(_request: Request, response: Response) {
    response.json(organizationService.getRoles());
}

export function createRole(request: Request, response: Response) {
    const result = organizationService.createRole(request.body);

    if ("errors" in result) {
        response.status(result.status).json({ errors: result.errors });
        return;
    }

    response.status(result.status).json(result.roles);
}