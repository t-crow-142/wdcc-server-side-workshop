// Import packages, perform initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing to the "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Whenever a GET request is made to /gimmeJSON, send some JSON back to the client
// representing a person.
app.get("/gimmeJSON", function (req, res) {

    // The JSON object to return
    const person = {
        name: "Walter White",
        address: "308 Negra Arroyo Lane"
    };

    // Send the JSON back to the client
    res.json(person);
});

// Start the webapp running
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});