const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String },
  description: { type: String, default: "No description" },
  status: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Number, default: 0 },
});

module.exports = mongoose.model("ticket", ticketSchema);
