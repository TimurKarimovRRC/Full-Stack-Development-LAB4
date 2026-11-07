import express from "express";
import { employeeRoutes } from "./routes/employeeRoutes.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());
app.use("/api", employeeRoutes);

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});