const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect(
    "mongodb+srv://haliccatalin:<password>@endacluster.dervwc0.mongodb.net/EndaTrello?retryWrites=true;",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  mongoose.set("useCreateIndex", true);
};
