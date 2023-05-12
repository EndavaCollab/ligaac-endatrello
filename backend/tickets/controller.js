const mongoose = require("mongoose");

const ticketModel = require("./model/ticket.model");

exports.getAllTickets = (req, res, next) => {
  res.send("Get method for Tickets");
};
