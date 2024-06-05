import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// const server = require("http").createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server);

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
// io.on("connection", (socket) => {
//   console.log("user connected");
// });

// routers
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

export { app };
