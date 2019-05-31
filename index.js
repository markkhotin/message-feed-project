const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MessageModel = require("./server/models/message");

const port = process.env.PORT || 5000;
const mongoURI = `${process.env.MONGODB_URI ||
  "mongodb://localhost:27017"}/message_feed_db`;

const app = express();

// Database configuration
mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Successfully connected to MongoDB!");
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// parse application/json
app.use(bodyParser.json());

app.post("/api/submitMessage", async (req, res) => {
  try {
    const { email, text } = req.body;
    const message = new MessageModel({ email, text });
    await message.save();

    res.status(200).json({
      text: "Successfully created new message",
      createdMessage: message
    });
  } catch (e) {
    console.log("Error while creating new message:", e);
    res.status(400).json(e);
  }
});

// An api endpoint that returns a short list of items
app.get("/api/getMessages", async (req, res) => {
  try {
    const messages = await MessageModel.find({});
    res.json(messages);
  } catch (e) {
    console.log("Error while getting messages:", e);
    res.status(400).json(e);
  }
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port);

console.log("App is listening on port " + port);
