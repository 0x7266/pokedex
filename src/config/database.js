const mongoose = require("mongoose");

function connect(callback) {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    connectTimeoutMS: 300000000,
  });
  mongoose.connection.on("error", (error) => console.error(error));
  mongoose.connection.on("open", async () => {
    console.log("Connected to database");
    await callback();
  });
}

module.exports = connect;
