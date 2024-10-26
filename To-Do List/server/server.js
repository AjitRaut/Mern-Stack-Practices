const express = require('express');
const connectDB = require('./config/db'); 
require('dotenv').config(); 
const bodyParser = require("body-parser");
const cors = require("cors");
const todoroute = require("./routes/todoRoute")

const app = express();

connectDB();

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/todos" ,todoroute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
