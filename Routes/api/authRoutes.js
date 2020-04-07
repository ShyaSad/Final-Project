const router = require('express').Router();
const auth = require('./auth');
const db = require('./../../Models')

router.route('/signup').post(async ({ body }, res) => {

    try {
        const userDocument = await db.User.find({ Email: body.email });

        if (userDocument.length > 0) {
            res.json('User email already exists!');
        } else {
            // if they don't exist, create it
            const hashedPassword = (await auth.create(body.password));
            const newUser = await db.User.create({ Email: body.email, Password: hashedPassword });
            res.json(newUser);
        }
    } catch (err) {
        res.json(err);
    }


    // .then(response => {
    //     response.length ?  :
    //         auth.create(body.password).then(hash => {
    //             db.User.create({ Email: body.email, Password: hash }).then(user => res.json(user))
    //         })
    // })
})

router.route('/login').post(async ({ body }, res) => {

    try {
        const userDocument = await db.User.findOne({ Email: body.email });
        if (!userDocument) {
            res.json({ success: false, msg: 'Incorrect username or password' });
        } else {
            // first, get a hash of the password
            const encryptedPassword = await auth.create(body.password);

            if (userDocument.password === encryptedPassword.hash) {
                res.json({ ...userDocument._doc, success: true, msg: 'User Logged In!' });
            } else {
                res.json({ success: false, msg: 'Password Incorrect!' });
            }
        }
    } catch (err) {
        console.log('Error loging in', err);
        res.json(err);
    }








    // .then(response => {
    //     if (!response) {
    //         res.json({ success: false, msg: 'Incorrect user email!' });
    //     } else {
    //         auth.verify(body.password, hash => {
    //             hash === response.Password ? 
    //     }            
    // }).catch(err => console.log(err))
})

module.exports = router