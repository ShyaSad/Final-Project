const router = require("express").Router();
const meetingController = require('../../Controllers/meetingController')
// const need something else here

// upcoming route is prob wrong for frontend
// router.route("/meetings")
// .get(meetingController.findAll());

// router.post('/create', (req,res)=>{
//     console.log(req.body)
//     meetingController.create(req.body).then(data=>{
//         console.log(data);
//         res.json(data)
//     })
// })
router.route("/create")
.post(meetingController.create);

module.exports = router;