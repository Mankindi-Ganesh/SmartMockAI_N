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

/* ================= CORS (FULL FIX) ================= */

const allowedOrigins = [
  process.env.FRONTEND_URL,     // production frontend
  "http://localhost:5173",      // local frontend
];

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps, postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// VERY IMPORTANT → handles PUT/DELETE preflight
app.options("*", cors());

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

connection();        // connect DB
newsLetterCron();    // start cron after env load

/* ================= ERROR HANDLER ================= */

app.use(errorMiddleware);

export default app;