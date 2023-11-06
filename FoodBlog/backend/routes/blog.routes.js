let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcryptjs');
let router = express.Router();

let foodSchema = require("../models/blog");
let userSchema = require("../models/user");

router.route("/").get(async (req, res, next) => {
  await foodSchema
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

router.route("/matchid").post(async (req, res, next) => {
  const blogId = req.body._id;
  res.json({
    data: blogId,
  });
  /* await userSchema
    .findById({

    }) */
});

router.route("/view-blogs").post(async (req, res, next) => {  
  
});

router.route("/u/:username").get(async (req, res, next) => {
  await foodSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched",
        status: 200,
      });
    })
    .catch(err => {
      return next(err)
    });
});

router.route("/create-blog").post(async (req, res, next) => { 
  await foodSchema
    .create({
      author: req.body.author,
      title: req.body.title,
      description: req.body.description,
      dishOrigin: req.body.dishOrigin,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    })
    .then((blog) => {
      res.json({
        data: blog,
      });
    });
});

module.exports = router;