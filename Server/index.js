const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');
connectDb();
const app = express();

const port = process.env.PORT || 8086;

app.use(cors());
app.use(express.json());
app.use("/api/form", require("./routes/Userroute"));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });