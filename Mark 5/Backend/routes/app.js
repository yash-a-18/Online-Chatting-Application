var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey@2001')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.post('/userhome', verifyToken, (req, res) => {
    res.json({
        msg: 'User Home Page'
    })
})

async function addToDB(req, res) {
    var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        email: req.body.email,
        mobileno: req.body.mobileno,
        pswd: User.hashPassword(req.body.pswd),
    })

    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey@2001')
            res.status(200).json({
                token: token,
                msg: "Successfully Registered!!"
            })
        }
    });
}

router.post('/register', (req, res, next) => {
    addToDB(req, res);
});

router.post('/login', function(req, res, next) {
    User.findOne({ email: req.body.email }, (err, user) => {
        console.log(user);
        if (err) {
            console.log(err);
            res.json({
                msg: "Error"
            })
        } else {
            if (!user) {
                res.json({
                    msg: "Invalid Email"
                })
            } else {
                bcrypt.compare(req.body.pswd, user.pswd).then(match => {
                        if (match) {
                            // console.log("success");
                            let payload = { subject: user._id }
                            let token = jwt.sign(payload, 'secretkey@2001')
                            res.status(200).json({
                                token: token,
                                msg: "Login successfull",
                                user: user
                            })
                        } else {
                            // console.log("incorrect password");
                            res.json({
                                msg: "Incorrect Password"
                            })
                        }
                    }).catch(err => {
                        console.log("Something went wrong");
                        res.json({
                            msg: "Something went wrong"
                        })

                    })
                    // res.send('yupp')
            }
        }
    })
});

router.post('/readUser', function(req, res, next) {
    User.find({}, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                msg: "Error"
            })
        } else {
            res.json({ user: user })
        }
    })
});

router.post('/deleteAccount', verifyToken, (req, res) => {
    console.log(req.userId)
    User.deleteOne({ _id: req.userId }, function(err, obj) {
        if (err) {
            console.log(err);
            res.json({
                msg: "Error in deleting Account"
            })
        } else {
            console.log('Record deleted successfully')
            res.json({
                msg: "Account deleted successfully"
            })
        }
    });
});


module.exports = router;