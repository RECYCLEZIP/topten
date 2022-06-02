import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorHandler";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("AI Project 10 TEAM - TOPTEN");
});

export default app;
