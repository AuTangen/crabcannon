require('dotenv').config();

const express = require('express');
const session = require('express-session')
const path = require('path');
const PORT = process.env.PORT || 3001;
const auth_routes = require("./controllers/authController");
// const bodyParser = require('body-parser');

const db = require("./config/connection");
const cors = require('cors');
const app = express();

app.use(cors());

// app.use(bodyParser.json());

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

app.use('/auth', auth_routes)

app.get('/', (req, res) => {

  const data = {

    message: 'Hello from the API!'

  };
console.log(data)
  res.json(data);

});



db.sync().then(() => {
  app.listen(PORT, () => console.log("Server started on port %s", PORT));
});
