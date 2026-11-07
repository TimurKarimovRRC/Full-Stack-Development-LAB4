import { Router } from "express";
import {
    createRole,
    getRoles,
} from "../controllers/organizationController.js";

export const organizationRoutes = Router();

organizationRoutes.get("/roles", getRoles);
organizationRoutes.post("/roles", createRole);