/* eslint-disable promise/always-return */
/* eslint-disable prettier/prettier */
const functions = require("firebase-functions");
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// this file was ignored to not leak API key create your own apiKey.js and export the API KEY
const apiKey = require("./apiKey");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);

  const url = "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + apiKey;

  let contactObject = {
    properties: [
      {
        property: "email",
        value: req.body.email
      }
    ]
  };

  axios
    .post(url, contactObject)
    .then(response => {
      console.log(response);
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
});

exports.hsMiddleware = functions.https.onRequest(app);
