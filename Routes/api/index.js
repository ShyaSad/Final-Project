const router = require("express").Router();
const meetingRoutes = require("./apiMeeting");
const inspirationRoutes = require("./apiInspiration");
const authRoutes = require('./authRoutes')

router.use("/meetings", meetingRoutes);

router.use("/daily", inspirationRoutes);

router.use('/auth', authRoutes)

module.exports = router;