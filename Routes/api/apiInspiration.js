const router  =  require("express").Router();
const inspireController = require("../../Controllers/InspireController");

router.route("/inspirations")
.get(inspireController.findAll);

module.exports = router;