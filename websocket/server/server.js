const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const port = 5000;
app.use(cors());
const server = http.createServer(app);

// Making server using http method
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send(`<h3>Welcome</h3>`);
});

// Here made the connection of socket.io
io.on("connection", (socket) => {
  console.log("connected ", socket.id);
  socket.on("chat-message", ({message , client}) => {
    console.log(`Recevied meassage from ${socket.id}` ,message);

    // For sending message to perticular user.
    socket.to(client).emit("chat-message", message);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
