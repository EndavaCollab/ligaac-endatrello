const mongoose = require('mongoose');

const ticketModel = require('./model/ticket.model');

exports.getAllTickets = (req, res, next) => {
    res.send("GET Method for Tickets");
};

exports.addTicket = (req, res, next) => {
    let body = req.body;

    console.log(body);

    const ticket = new ticketModel({
        _id: new mongoose.Types.ObjectId(),
        title: body.title,
        description: body.description,
    });

    ticket.save().then(() => {
        console.log('Ticket saved!');
    });

    res.send("ADD Method for Ticket");
};

exports.deleteTicket = (req, res, next) => {
    res.send("DELETE Method for Ticket");
};

exports.updateTicket = (req, res, next) => {
    res.send("UPDATE Method for Ticket");
};

exports.patchTicket = (req, res, next) => {
    res.send("PATCH Method for Ticket");
};

exports.getById = (req, res, next) => {
    res.send("GET BY ID Method for Ticket");
};