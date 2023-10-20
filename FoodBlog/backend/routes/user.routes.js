let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcryptjs');
let router = express.Router();

let userSchema = require("../models/user");

router.route("/login").get(async (req, res, next) => {
    await userSchema
        .find()
        .then((result) => {
        res.json({
            data: result,
            message: "Data successfully uploaded",
            status: 200,
        });
        })
        .catch(err => {
        return next(err);
        });
    const user = new userSchema(req.body);
    bcrypt.hash(user.password, 10).then(function(hash) {
        if(user.password == hash) console.log("PASSWORD MATCHED")
    });
    res.render('', {user});
});

router.route("/signup").post(async (req, res, next) => {
    await userSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully uploaded",
                status: 200,
            });
        })
        .catch(err => {
            return next(err);
        });
    const user = new userSchema(req.body);
    bcrypt.hash(user.password, 10).then(function(hash) {
        user.password = hash;
        user.save();
    });
    res.send('Thanks for registering!');
});

router.route("/").get(async (req, res, next) => {
    await userSchema
        .find()
        .then((result) => {
            res.json({
                data: result,
                message: "All items successfully fetched",
                status: 200,
            });
        })
        .catch(err => {
            return next(err);
        });
});

module.exports = router;