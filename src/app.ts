import express from "express";
import cors from "cors";
import session from "express-session";
import { errorMiddleware } from "@src/middlewares/errorHandler";
import { indexController } from "@src/api/index.controller";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "devKey",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
    }),
);

indexController(app);
app.use(errorMiddleware);

export default app;
