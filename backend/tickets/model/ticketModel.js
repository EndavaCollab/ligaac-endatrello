const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.ObjectId, required: true },
  title: { type: String },
  description: { type: String, default: "No description" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Ticket", ticketSchema);
