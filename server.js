const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./Routes')
const dotenv = require("dotenv");
dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/aaadb',
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)

app.use(apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
