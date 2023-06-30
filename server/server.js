const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");

const app = express();

//connect cloud database
const connectDB = "mongodb://127.0.0.1/mernblog";
mongoose
  .connect(connectDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
  })
  .then(() => console.log("connect success"))
  .catch((e) => console.log("connect error"+e));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api", blogRoute);
app.use("/api", authRoute);

const port = 8080;
app.listen(port, () => {
  console.log(`start server in port ${port}`);
});
