let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcryptjs');
let router = express.Router();

let foodSchema = require("../models/blog");
let userSchema = require("../models/user");
const blog = require('../models/blog');

// router.route("/u/:username/create-blog").post(async (req, res, next) => {
//   // find if theres any blogs alreay made by that user

//   let blog = await foodSchema.findOne({username: req.body.username})
//   // make sure there is one
//   // blog.userBlogs.push({req.body.userBlog})
//   // blog.userBlogs.push({req.body})
//   // await blog.save();

//   await foodSchema
//     .create(req.body)
//     .then((result) => {
//       res.json({
//         data: result,
//         message: "Data successfully uploaded",
//         status: 200,
//       });
//     })
//     .catch(err => {
//       return next(err);
//     });
// });

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



router.route("/u/:username/create-blog").get(async (req, res, next) => {
  let newBlog = await foodSchema.create({
    title: req.body.title,
    description: req.body.description,
    dishOrigin: req.body.dishOrigin,
    category: req.body.category,
    imageUrl: req.body.imageUrl
  })

  // let { username } = req.params;
  let username = req.params.username;

  let user = await userSchema.findOne({username: username});

  user.userBlogs.push(newBlog._id)
  user.save();

  res.json({ user })
});

router.route("/view-blogs").get(async (req, res, next) => {
});

router.route("/u/:username/view-blogs").get(async (req, res, next) => {
});

router.route("/u/:username/view-indblog/u/:otherusername").get(async (req, res, next) => {
});

router.route("/u/:username/view-indblog/u/:otherusername/view-indblog").get(async (req, res, next) => {
});

router.route("/u/:username/view-profile").get(async (req, res, next) => {
});

router.route("/u/:username/view-profile/u/:otherusername").get(async (req, res, next) => {
});

router.route("/view-profile/u/:username").get(async (req, res, next) => {
});

router.route("/view-profile/u/:username").get(async (req, res, next) => {
});

/* router.route("/u/:username/view-indblog/:blogId").get(async (req, res, next) => {
  await foodSchema
    .find({}) // Create a specific blogid and add to blog schema your blog post 
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

  await userSchema
    .findOne({username: req.params.username})
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
  
}); */

/* router.route("/:userId").get(async (req, res, next) => {
    await userSchema
        .findById(req.params.userId)
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
}); */





module.exports = router;
