const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String },
  description: { type: String, default: "No description" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("ticket", ticketSchema);

 module.exports = mongoose.model('tickets', ticketSchema);