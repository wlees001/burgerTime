const burger = require("./models/burger.js");
const express = require("express");

const app = express();
const router = {
    retrieveBurger: app.get("/", function (req, res) {
        orm.selectAll('plans', function (err, data) {
            if (err) {
                return res.status(500).end();
            }
            res.render("index", {
                plans: data
            });
        });
    }),
    // Create a new todo
    postBurger: app.post("/todos", function (req, res) {
        orm.insertOne('plans', 'plan', req.body.plan, function (err, data) {
            if (err) {
                return res.status(500).end();
            }
            res.json({
                id: data.insertId
            });
        })
    }),
    // Update a todo
    updateBurger: app.put("/todos/:id", function (req, res) {
        orm.updateOne('plans', 'plan', req.body.plan, req.params.id, function (err, data) {
            if (err) {
                // If an error occurred, send a generic server faliure
                return res.status(500).end();
            } else if (data.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        })
    })
}

module.exports = burgers_controller;