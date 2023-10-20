let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcryptjs');
let router = express.Router();

let foodSchema = require("../models/blog");

router.route("/create-blog").post(async (req, res, next) => {
  await foodSchema
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
});

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
      return next(err)
    });
});

module.exports = router;