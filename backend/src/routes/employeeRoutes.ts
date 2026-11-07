import { Router } from "express";
import { getDepartments } from "../controllers/employeeController.js";

export const employeeRoutes = Router();

employeeRoutes.get("/departments", getDepartments);