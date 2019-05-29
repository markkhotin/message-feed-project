const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  email: { type: String, required: true },
  text: { type: String, required: true },
  created: { type: Date, required: true, defaultValue: Date.now }
});

const MessageModel = mongoose.model('Message', messageSchema);

module.exports = {
  MessageModel
};
