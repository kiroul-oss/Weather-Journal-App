//Global Variables

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;

// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes
const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

app.listen(port, function () {
  console.log(`server run on : http://localhost:${port}`);
});

app.get("/all", function (request, response) {
  response.send(projectData);
});

app.post("/weather", (request, response) => {
  projectData = {
    temp: request.body.temp,
    date: request.body.newDate,
    content: request.body.feeling,
  };
  response.send(projectData);
});
