const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    name: { type: String, required: true },
    day: { type: String },
    time: { type: String },
    link: { type: String },
    phone: { type: String },
    code: { type: String },
    notes: { type: String },
    military: { type: Number }
});

const meeting = mongoose.model("Meeting", meetingSchema);

module.exports = meeting;