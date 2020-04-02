const db = require("../Models");

module.export = {
findAll: function(req, res) {
    db.Meeting
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
// need to make daily and specific day show up
findByDay: function(req, res) {
    db.Meeting
    .findByDay(req.params.day)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findByTime: function(req, res) {
    db.Meeting
    .findByTime(req.params.time)
    .then(dbModel => res.json(dbModel)
    .catch(err => res.status(422).json(err));
},
create: function(req, res) {
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