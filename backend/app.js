const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const databaseCondig = require("./configs/db");

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.disable("etag");

app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Controll-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header(
      "Access-Controll-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET"
    );
    return res.status(200).json({});
  }

  next();
});

databaseCondig.connect();

const ticketRoute = require("./tickets/route");
app.use("/tickets", ticketRoute);

app.get("/", (req, res) => {
  let nameParam = req.query.name;
  let emailParam = req.query.email;

  console.log(nameParam);
  console.log(emailParam);

  res.send("Hello World! Welcome to our page, " + nameParam);
});

app.listen(2323, () => {
  console.log(`Example app listening on port 2323`);
});
