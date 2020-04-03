const router = require("express").Router();
const meetingRoutes = require("./apiMeeting");

router.use("/meetings", meetingRoutes);

module.exports = router;