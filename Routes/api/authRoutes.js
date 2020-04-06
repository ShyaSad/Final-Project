const router = require('express').Router();
const auth = require('./auth');
const db = require('./../../Models')

router.route('/signup').post(({body},res)=>{
    db.User.find({Email:body.email}).then(response=>{
        response.length ? res.json('User email already exists!') :
        auth.create(body.password).then(hash=> {
            db.User.create({Email:body.email, Password: hash}).then(user=>res.json(user))
        })
    })
})

router.route('/login').post(({body}, res)=>{
    db.User.findOne({Email:body.email}).then(response=>{
        !response ? res.json({success: false, msg: 'Incorrect user email!'}) :
        auth.verify(body.password, hash =>{
            hash === response.Password ? res.json({...response._doc, success:true, msg: 'User Logged In!'}) : 
            res.json({success: false, msg: 'Password Incorrect!'})
        })
    }).catch(err=>console.log(err))
})

module.exports = router