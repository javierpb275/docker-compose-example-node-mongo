const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/mydatabase")
  .then((db) => console.log("DB is connected to", db.connection.host))
  .catch((err) => console.error(err));
