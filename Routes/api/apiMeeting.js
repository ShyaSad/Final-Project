const router = require("express").Router();
// const need something else here

// upcoming route is prob wrong for frontend
router.route("/meetings")
.get(meetingController.findAll)
.post(meetingController.create);

module.export = router;