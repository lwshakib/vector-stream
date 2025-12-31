import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

import { errorHandler } from "./middlewares/error.middlewares";
import morganMiddleware from "./logger/morgan.logger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.use(helmet());


app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/health", (req, res) => {
  res.send("API is healthy");
});


const httpServer = http.createServer(app);




app.use(morganMiddleware);
app.use(errorHandler);

export default httpServer;
