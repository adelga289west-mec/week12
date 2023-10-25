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

/*  router.route('/latestNews').get(async(req,res)=>{
    try{
        const latestPosts = await Post.find()
        .sort({ date: -1})
        .limit(3)
        res.json(latestPosts)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}) 
 */
module.exports = router;