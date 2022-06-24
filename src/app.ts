import "dotenv/config";
import cors from "cors";
import express from "express";
import { errorMiddleware } from "@src/middlewares/errorHandler";
import { indexController } from "@src/api/index.controller";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

indexController(app);
app.use(errorMiddleware);

export default app;
