const express = require("express");
const router = express.Router();

// When navigating to "/", show the homepage. Also update the hit counter.
router.get("/", function (req, res) {

    // Get the "hitCounter" cookie
    let hitCounter = req.cookies.hitCounter;

    // If it didn't exist, create the initial one.
    if (!hitCounter) {
        hitCounter = { hits: 1 };
    }

    // Otherwise, update the existing one.
    else {
        hitCounter.hits++;
    }

    // Send the updated cookie back to the client in the response
    res.cookie("hitCounter", hitCounter);

    // Also add it to res.locals so we can display the number on the home view
    res.locals.hits = hitCounter.hits;

    res.render("home");
});

// When we GET /resetHitCounter, we delete the hitCounter cookie and return to the homepage.
router.get("/resetHitCounter", function (req, res) {
    res.clearCookie("hitCounter");
    res.redirect("/");
})

module.exports = router;