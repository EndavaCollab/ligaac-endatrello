const mongoose = require("mongoose");

const ticketModel = require("./model/ticket.model");

exports.getAllTickets = (req, res, next) => {
  res.send("Get Method for Tickets");
};

exports.getById = (req, res, next) => {
  res.send("Get By Id Method for Tickets");
};

exports.addTicket = (req, res, next) => {
  let body = req.body;

  console.log(body);

  const ticket = new ticketModel({
    _id: new mongoose.Types.ObjectId(),
    title: body.title,
    description: body.description,
  });

  /*ticketModel.save().then(() => {
    console.log("Ticket saved!");
  });*/

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
