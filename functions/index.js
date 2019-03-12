/* eslint-disable promise/always-return */
/* eslint-disable prettier/prettier */
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

const apiKey = "3b39d698-63e9-474c-82f8-2de71166af36";
const url = "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + apiKey;

app.post(url, (req,res)=>{
    response.send("mood-b");
    let data = request.query;
    console.log(data);
});

exports.hubSpotMiddleware = functions.https.onRequest(app);


// exports.createHsContact = functions.https.onRequest((request, response) => {

//     response.send("mood");
//     let data = request.query;
//     console.log(data);

//     const apiKey = "3b39d698-63e9-474c-82f8-2de71166af36";
//     const url = "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + apiKey;

//     let contactObject = {
//         properties: [ 
//             {
//                 property: "email",
//                 value: data.email
//             },
//             {
//                 property: "name",
//                 value: data.name
//             }
//         ]};

//     axios.post(url, contactObject).then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// });
