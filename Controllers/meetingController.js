const db = require("../Models");
const express = require("express");

module.exports = {
findAll: function(req, res) {
    console.log(req.query)
    db.Meeting
    .find(req)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findByDay: function(req, res) {
    db.Meeting
    .findByDay(req.params.day)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findByTime: function(req, res) {
    db.Meeting
    .findByTime(req.params.time)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
create: function(req,res) {
    db.Meeting
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
remove: function(req, res) {
    db.Meeting
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
 }

















}