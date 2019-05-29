const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const MessageModel = require('./server/models/message');

const app = express();

// Database configuration

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connected to MongoDB!");
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/insert", (req, res) => {
  const { email, text } = req.body;
  const message = new MessageModel({ email, text });
  message.save();
});

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  const list = ["item1", "item2", "item777"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
