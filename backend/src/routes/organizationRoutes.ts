import { Router } from "express";
import { getRoles } from "../controllers/organizationController.js";

export const organizationRoutes = Router();

organizationRoutes.get("/roles", getRoles);