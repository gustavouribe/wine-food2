const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const pairRouter = require("./routes/pairRoutes");
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/pair", pairRouter);
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/wine-pair",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log(err));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("on port 8000");
});
