// The express package contains Express, and its own required dependencies. It needs to be
// installed using npm.
const express = require("express");
const app = express();
const port = 3000;

// Setup static routing. Any file located in the "public" folder
// will be able to be accessed by clients directly.
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Set up to use the body parser (allows us to read POSTed form data)
app.use(express.urlencoded({ extended: false }));

// When a GET request is made to "/" (i.e. the root path), send "You sent me a GET request!" back to the client.
app.get("/", function (req, res) {
    console.log("GET request received to '/' ");
    res.send("You sent me a GET request!");
});

// When a GET request is made to "/" (i.e. the root path), send "You sent me a POST request!" back to the client.
app.post("/", function (req, res){
    console.log("POST request received to '/' ");
    res.send("You sent me a POST request!");
});


app.get("/pathparam/:name", function (req, res){
    console.log("GET request received to /pathparam/:name");

    const name = req.params.name;
    console.log(`Name: ${name}`);
    res.send(`Hello ${name}.`);
});


app.get("/formdataget", function (req, res){
    console.log("GET request received to /formdataget");
    // Console log in the server the data in req.query
    console.log(`
        Data in req.query:
        ${JSON.stringify(req.query)}
    `);
    // Example of how to access a parameter from form data or a query parameter in a GET request:
    const firstName = req.query.fname;
    // Response back to client:
    res.send(`
        Hello <strong>${firstName}</strong>.<br><br>
        This is the data received from the query parameters in the GET request:
        ${JSON.stringify(req.query)}
    `);
});


app.post("/formdatapost", function (req, res){
    console.log("POST request received to /formdatapost");
    // Console log in the server the data in req.body
    console.log(`
        Data in req.body:
        ${JSON.stringify(req.body)}
    `);
    // Example of how to access a parameter from form data in a POST request:
    const firstName = req.body.fname;
    // Response back to client:
    res.send(`
        Hello <strong>${firstName}</strong>.<br><br>
        This is the data received from form body in the POST request:
        ${JSON.stringify(req.body)}
    `);
});

app.post("/scoreform", function(req, res){
    console.log("Request received to /scoreform");
    // Store score in a variable:
    const score = req.body.score;
    // Store total in a variable:
    const total = req.body.total;
    // Calculate percentage:
    const percentage = (score / total) * 100;

    console.log(`The percentage is ${percentage}%`);

    res.send(`The percentage is ${percentage}%`);
});

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});