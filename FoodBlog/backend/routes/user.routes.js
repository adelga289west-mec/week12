let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcrypt'); 
let router = express.Router();

let userSchema = require("../models/user");

// router.route("/login/:userId").get(async (req, res, next) => {
//     const userAccount = await userSchema.findOne({
//         email: req.body.email,
//     });
//     if(userAccount) res.render('/login', {userAccount});
// });

router.route("/login").post(async (req, res, next) => {
    let matchedAccount = await userSchema.findOne({
        email: req.body.email,
    });
    bcrypt.compare(req.body.password, matchedAccount.password, (err, result) => {
        console.log("req.body.password: " + req.body.password);
        console.log("hashed password:" + matchedAccount.password);
        console.log(result);
        if(result) {
            res.json({
                data: matchedAccount,
                message: "Data successfully uploaded",
                status: 200,
            });
            console.log("USER ACCOUNT LOGGED IN."); 
        } else{
            res.json({
                success: false,
                message: "Passwords do not match",
            });
        }
    });
});

// router.route("/signup/:userId").get(async (req, res, next) => {
//     const userAccount = await userSchema.findOne({
//         email: req.body.email,
//     });
//     if(userAccount) render('/signup', {userAccount});
// });

router.route("/signup").post(async (req, res, next) => {
    let hash = await bcrypt.hash(req.body.password, 10);
    await userSchema
        .create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            confirmpassword: hash,
        })
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully uploaded",
                status: 200,
            });
        })
        .catch(err => {
            console.log(err)
            return next(err);
        });
});

router.route("/:userId").get(async (req, res, next) => {
    await userSchema
        .findById(req.params.userId)
        .then((result) => {
            res.json({
                data: result,
                message: "All items successfully fetched",
                status: 200,
            });
            console.log(result.userBlogs)
        })
        .catch(err => {
            return next(err);
        });
});

router.route("/validate/:email").get(async (req, res, next) => { 
    await userSchema
        .findOne({email: req.params.email})
        .then((result) => {
            res.json({
                data: result,
                available: result ? false : true,
                message: "All items successfully fetched",
                status: 200,
            });
        })
        .catch(err => {
            return next(err);
        });
});

module.exports = router;