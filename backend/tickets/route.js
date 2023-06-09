const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAllTickets);

router.post("/", controller.addTicket);

router.delete("/:id", controller.deleteTicket);

router.put("/:id", controller.updateTicket);

router.get("/get-by-id/:id", controller.getById);

module.exports = router;
