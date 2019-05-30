const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  email: { type: String, required: true },
  text: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
