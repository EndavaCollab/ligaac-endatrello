const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect(
    "mongodb+srv://haliccatalin:AHLQ3vx8YaTHK3Dw@endacluster.dervwc0.mongodb.net/EndaTrello?retryWrites=true;",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  mongoose.set("useCreateIndex", true);
};
