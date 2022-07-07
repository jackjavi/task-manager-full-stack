const express = require("express");
const cors = require("cors");
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

const app = express();

const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://jackkavi:XHuDbmcEDty47x9t@cluster0.t34ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log(`Server listening on port : ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
