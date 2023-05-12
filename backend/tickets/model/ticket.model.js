const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("ticket", ticketSchema);
