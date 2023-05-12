const mongoose = require('mongoose');
const ticketModel = require('./model/ticket.model');

exports.getAllTickets = (req, res, next) => {
    res.send("GET method for all tickets.");
}

exports.getTicketById = (req, res, next) => {
    res.send("GET method for a single ticket.");
}

exports.addTicket = (req, res, next) => {
    let body = req.body;

    console.log(body);

    const ticket = new ticketModel({
        _id: new mongoose.Types.ObjectId(),
        title: body.title,
        description: body.description,
    })

    ticket.save().then(() => {
        console.log("Ticket saved.");
    });

    res.send("POST method for a ticket.");
}

exports.deleteTicket = (req, res, next) => {
    res.send("DELETE method for a ticket.");
}

exports.updateTicket = (req, res, next) => {
    res.send("PUT method for a ticket.");
}

exports.patchTicket = (req, res, next) => {
    res.send("PATCH method for a ticket.");
}
