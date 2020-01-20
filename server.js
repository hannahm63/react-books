const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const logger = require('morgan');
const routes = require('./routes');

// Declare port
const PORT = process.env.PORT || 3001;

// Initialize express app
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// declaring which database to use based on environment (development or production)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooksDB";

// connecting to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// connect server with routes
app.use(routes);

// using morgan to log requests
app.use(logger("dev"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
