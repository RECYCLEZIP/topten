import express from "express";
import cors from "cors";
import { errorMiddleware } from "@src/middlewares/errorHandler";
import { indexController } from "@src/api/index.controller";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

indexController(app);
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("AI Project 10 TEAM - TOPTEN");
});

export default app;
