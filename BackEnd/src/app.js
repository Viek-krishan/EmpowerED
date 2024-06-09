import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new SocketIOServer(server);

app.use(cors());
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
io.on("connection", (socket) => {
  socket.on("userJoined", (data) => {
    const { name, roomId, userId, host, presenter } = data;
    socket.join(roomId);
    socket.emit("userIsJoined", {success: true})
  });
});

// routers
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

export { app };
