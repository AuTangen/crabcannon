require('dotenv').config();

const express = require('express');
const session = require('express-session')
const path = require('path');
const PORT = process.env.PORT || 3001;

const db = require("./config/connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// app.use("/", []);

db.sync().then(() => {
  app.listen(PORT, () => console.log("Server started on port %s", PORT));
});
