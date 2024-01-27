const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/register");




// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));



