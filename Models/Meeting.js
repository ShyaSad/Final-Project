const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    name: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    link: { type: String, required: true},
    phone: { type: String },
    code: { type: String },
    notes: { type: String }
});

const meeting = mongoose.model("Meeting", meetingSchema);

module.exports = meeting;