// importing express & burger.js
var express = require("express");
var burger = require("../models/burger.js");

// setting up the router
var router = express.Router();

// setting up routes and their rendering logic
router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    cat.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    cat.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changeRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
