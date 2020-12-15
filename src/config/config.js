const mangoose = require("mongoose");

const dbUrl =
  "mongodb+srv://<username>:<dip12345>@core-3.o1wxq.mongodb.net/<dip>?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUniqunfiedtopology: true,
  useFindAndModified: false,
  useCreateIndex: true,
};

function establishConnection() {
  console.log("\n establishing new connection...");

  mongoose
    .connect(dbUrl, options)
    .then(() => {
      console.info("database connection established");
    })
    .catch((err) => {
      console.log("database connection failed");
      establishConnection();
    });
}

establishConnection();

const db = mongoose.connection;
module.exports = db;
