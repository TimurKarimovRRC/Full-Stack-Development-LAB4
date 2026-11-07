import { Router } from "express";
import {
    createEmployee,
    getDepartments,
} from "../controllers/employeeController.js";

export const employeeRoutes = Router();

employeeRoutes.get("/departments", getDepartments);
employeeRoutes.post("/employees", createEmployee);