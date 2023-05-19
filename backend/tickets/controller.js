const mongoose = require("mongoose");

const ticketModel = require("./model/ticket.model");

exports.getAllTickets = async (req, res, next) => {
  ticketModel.find().then(
    (results) => {
      res.send({
        status: 200,
        message: "All tickets from database",
        data: results,
      });
    },
    (error) => {
      res.send({
        status: 500,
        message: "Something went wrong!",
        data: error,
      });
    }
  );
};

exports.getById = (req, res, next) => {
  // va lua id-ul ticketului din request
  let ticketId = req.params.id;

  ticketModel.findOne({ _id: ticketId }).then(
    (result) => {
      if (result) {
        res.send({
          status: 200,
          message: "Get ticket with success!",
          data: result,
        });
      } else {
        res.send({
          status: 404,
          message: "Ticket not found!",
          data: null,
        });
      }
    },
    (error) => {
      res.send({
        status: 500,
        message: "Something went wrong!",
        data: error,
      });
    }
  );
};

exports.addTicket = (req, res, next) => {
  let body = req.body;

  console.log(body);

  const ticket = new ticketModel({
    _id: new mongoose.Types.ObjectId(),
    title: body.title,
    description: body.description,
  });

  ticket.save().then(
    (result) => {
      res.send({
        status: 200,
        message: "Add ticket with success!",
        data: result,
      });
    },
    (error) => {
      res.send({
        status: 500,
        message: "Something went wrong!",
        data: error,
      });
    }
  );
};

exports.deleteTicket = (req, res, next) => {
  // va lua id-ul ticketului din request
  let ticketId = req.params.id;

  ticketModel.deleteOne({ _id: ticketId }).then(
    () => {
      res.send({
        status: 200,
        message: "Delete ticket with success!",
        data: null,
      });
    },
    (error) => {
      res.send({
        status: 500,
        message: "Something went wrong!",
        data: error,
      });
    }
  );
};

exports.updateTicket = (req, res, next) => {
  // va lua id-ul ticketului din request
  let ticketId = req.params.id;

  ticketModel
    .updateOne(
      { _id: ticketId },
      {
        $set: {
          _id: ticketId,
          title: req.body.title,
          description: req.body.description,
        },
      }
    )
    .then(
      async () => {
        let updatedTicket = await ticketModel.find({ _id: ticketId });

        res.send({
          status: 200,
          message: "Update ticket with success!",
          data: updatedTicket[0],
        });
      },
      (error) => {
        res.send({
          status: 200,
          message: "Something went wrong!",
          data: error,
        });
      }
    );
};
