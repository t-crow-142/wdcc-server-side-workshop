// Import packages, initial setup
const express = require("express");
const app = express();
const port = 3000;

// Enable static routing for "public" folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Set up to use the body parser (allows us to read POSTed form data)
app.use(express.urlencoded({ extended: false }));

// When we receive a GET request to /getGreeting, read the "name" query parameter. Then return a JSON
// object whose "message" property is a personalized greeting.
app.get("/getGreeting", function (req, res) {

    // Gets the "name" query parameter (e.g. http://..../getGreeting?name=Andrew)
    const name = req.query.name;

    const greeting = {
        message: `Hello, ${name}!`
    };

    res.json(greeting);
});

// When we receive a GET request to /processFirstForm, read the "name" and "address" query parameters.
// These values will be equal to the values the user typed in the form. Then, return JSON with the same
// data.
app.get("/processFirstForm", function (req, res) {

    const submittedName = req.query.name;
    const submittedAddres = req.query.address;

    const data = {
        name: submittedName,
        address: submittedAddres
    };

    res.json(data);
});

// When we receive a POST request to /processSecondForm, read the "name" and "address" body parameters.
// These values will be equal to the values the user typed in the form. Then, return JSON with the same
// data.
app.post("/processSecondForm", function (req, res) {

    const receivedData = {
        name: req.body.name,
        address: req.body.address
    };

    res.json(receivedData);
});

// When we receive a GET request to /processThirdForm, read the "color" query parameter. This will have
// different data types depending on how many checkboxes the user ticked in the form. To alleviate this
// problem, pass it through the makeArray() function defined below, so we know it is ALWAYS an array.
// Then, create a JSON object with some info, and send it back.
app.get("/processThirdForm", function (req, res) {

    // Within our terminal window, we can see that the logged output is either undefined, or
    // a string, or an array, depending on the number of checkboxes which were selected.
    console.log(req.query.color);

    // This will ALWAYS be an array, with 0, 1, or multiple values.
    const favoriteColorsArray = makeArray(req.query.color);

    const info = {
        numFavorites: favoriteColorsArray.length,
        favorites: favoriteColorsArray
    }

    res.json(info);
});

// Start the server running
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});

// This utility function takes any input.
// If the input is undefined, a blank array is returned.
// If the input is an array, the input itself is returned, unmodified.
// If the input is not an array, a single-element array is returned, containing the input.
function makeArray(input) {
    if (input === undefined) {
        return [];
    }
    else if (Array.isArray(input)) {
        return input;
    }
    else {
        return [input];
    }
}