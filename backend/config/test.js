// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/socketio-example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Create a user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
});
const User = mongoose.model("User", userSchema);

io.on("connection", (socket) => {
  console.log("Client connected");

  // Handle admin changes
  socket.on("changeName", async (userId, newName) => {
    await User.findByIdAndUpdate(userId, { name: newName });
    io.to(userId).emit("dataUpdated", await User.findById(userId));
  });

  socket.on("changeEmail", async (userId, newEmail) => {
    await User.findByIdAndUpdate(userId, { email: newEmail });
    io.to(userId).emit("dataUpdated", await User.findById(userId));
  });

  socket.on("changeNumber", async (userId, newNumber) => {
    await User.findByIdAndUpdate(userId, { number: newNumber });
    io.to(userId).emit("dataUpdated", await User.findById(userId));
  });

  // Handle user joining room
  socket.on("joinRoom", (userId) => {
    socket.join(userId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server started on port 8080");
});


// Moving to Diffrent File
{
    // socketLogic.js

const socketIo = require("socket.io");
const mongoose = require("mongoose");

// Create a user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
});
const User = mongoose.model("User", userSchema);

const setupSocketLogic = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("Client connected");

    // Handle admin changes
    socket.on("changeName", async (userId, newName) => {
      await User.findByIdAndUpdate(userId, { name: newName });
      io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    socket.on("changeEmail", async (userId, newEmail) => {
      await User.findByIdAndUpdate(userId, { email: newEmail });
      io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    socket.on("changeNumber", async (userId, newNumber) => {
      await User.findByIdAndUpdate(userId, { number: newNumber });
      io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    // Handle user joining room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = setupSocketLogic;

}