const mongoose = require("mongoose");

const Ticket = require("./model/ticketModel");

exports.getAllTickets = (req, res, next) => {
  res.send("Get Method for Tickets");
};

exports.getById = (req, res, next) => {
  res.send("Get By Id Method for Tickets");
};

exports.addTicket = async (req, res, next) => {
  let body = req.body;
  console.log(body);

  const newTicket = new Ticket({
    _id: new mongoose.Types.ObjectId(),
    title: body.title,
    description: body.description,
  });
  await newTicket.save();

  res.send("Add Method for Ticket");
};

exports.deleteTicket = (req, res, next) => {
  res.send("Delete Method for Ticket");
};

exports.updateTicket = (req, res, next) => {
  res.send("Update Method for Ticket");
};

exports.patchTicket = (req, res, next) => {
  res.send("Patch Method for Ticket");
};
