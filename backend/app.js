import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";

import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";

import { newsLetterCron } from "./automation/newsLetterCron.js";

const app = express();

/* ================= ENV ================= */
config({ path: "./config/config.env" });

/* ================= CORS ================= */
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ================= MIDDLEWARES ================= */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/* ================= ROUTES ================= */
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

/* ================= SERVICES ================= */
newsLetterCron();      // start cron AFTER env load
connection();          // connect DB

/* ================= ERROR HANDLER ================= */
app.use(errorMiddleware);

export default app;
