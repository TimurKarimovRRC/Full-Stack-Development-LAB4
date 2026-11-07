import type { Request, Response } from "express";
import * as organizationService from "../services/organizationService.js";

export function getRoles(_request: Request, response: Response) {
    response.json(organizationService.getRoles());
}