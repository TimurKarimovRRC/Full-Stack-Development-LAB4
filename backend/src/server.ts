import express from "express";
import cors from "cors";
import { employeeRoutes } from "./routes/employeeRoutes.js";
import { organizationRoutes } from "./routes/organizationRoutes.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:5173";

app.use("/api", (request, response, next) => {
    const origin = request.get("Origin");

    if (origin !== undefined && origin !== frontendOrigin) {
        response.status(403).json({ errors: ["Origin not allowed."] });
        return;
    }

    next();
});

app.use("/api", cors({
    origin: frontendOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.use("/api", employeeRoutes);
app.use("/api", organizationRoutes);

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});