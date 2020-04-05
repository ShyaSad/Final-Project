const router = require("express").Router();
const meetingRoutes = require("./apiMeeting");
const inspirationRoutes = require("./apiInspiration");

router.use("/meetings", meetingRoutes);

router.use("/daily", inspirationRoutes);

module.exports = router;