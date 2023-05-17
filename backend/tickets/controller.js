const mongoose = require("mongoose");

const ticketModel = require("./model/ticket.model");

exports.getAllTickets = (req, res, next) => {
  res.send("Get method for Tickets");
};

exports.getById = (req, res, next) => {
  res.send("Get By Id Method Ticket");
};

exports.addTicket = async (req, res, next) => {
  let body = req.body;

  console.log(body);

  const ticket = new ticketModel({
    _id: new mongoose.Types.ObjectId(),
    title: body.title,
    description: body.description,
  });

  await ticket.save();

  res.send("Add method for Tickets");
};

exports.deleteTicket = (req, res, next) => {
  res.send("Delete method for Tickets");
};

exports.updateTicket = (req, res, next) => {
  res.send("Update method for Tickets");
};

exports.patchTicket = (req, res, next) => {
  res.send("Patch method for Tickets");
};
