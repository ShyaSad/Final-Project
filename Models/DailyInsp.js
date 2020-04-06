const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inspirationSchema = new Schema({
date: { type: String, required: true},
title: { type: String, required: true},
excerpt: { type: String, required: true},
reference: { type: String, required: true},
text: { type: String, required: true}
})

const inspireD = mongoose.model("dailyInspirations", inspirationSchema, "dailyInspirations");

module.exports = inspireD;