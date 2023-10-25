let mongoose = require('mongoose');
let express = require('express');
const bcrypt = require('bcrypt'); 
let router = express.Router();

let userSchema = require("../models/user");

router.route("/login").post(async (req, res, next) => {
  
    let matchedAccount = await userSchema.findOne({
        email: req.body.email,
    })

    bcrypt.compare(req.body.password, matchedAccount.password, (err, result) => {
        console.log("req.body.password: " + req.body.password);
        console.log("hashed password:" + matchedAccount.password);

        console.log(result)

        if(result){
            userSchema
                .find()
                .then((result) => {
                    res.json({
                        data: result,
                        message: "Data successfully uploaded",
                        status: 200,
                    });
                    console.log("USER ACCOUNT LOGGED IN.")
                })
                .catch(err => {
                    return next(err);
                });  
        } else{
            res.json({
                success: false,
                message: "Passwords do not match",
            })
        }   
    });
});

router.route("/signup").post(async (req, res, next) => {
    let hash = await bcrypt.hash(req.body.password, 10);
    
    await userSchema
        .create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
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
    res.render('', {})
});

module.exports = router;

// let mongoose = require('mongoose');
// let express = require('express');
// const bcrypt = require('bcrypt'); 
// let router = express.Router();

// let userSchema = require("../models/user");

// /* router.route("/login").get(async (req, res, next) => {
//     let matchedAccount = userSchema.find({
//         email: req.body.email,
//     })
//     bcrypt.compare(req.body.password, matchedAccount, (err, result) => {
//         console.log("req.body.password: " + req.body.password);
//         console.log("hashed password:" + matchedAccount);
//         if(req.body.password == matchedAccount.password){
//             // userSchema
//             //     .find()
//             //     .then((result) => {
//             //         res.json({
//             //             data: result,
//             //             message: "Data successfully uploaded",
//             //             status: 200,
//             //         });
//             //         console.log("USER ACCOUNT LOGGED IN.")
//             //     })
//             //     .catch(err => {
//             //         return next(err);
//             //     });  
//             console.log("Test.")
//         } else{
//             res.json({
//                 success: false,
//                 message: "Passwords do not match",
//             })
//         }   
//     });
//     res.render('', {user});
// }); */

// router.route("/signup").post(async (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         userSchema
//             .create({
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hash,
//                 confirmpassword: hash,
//             })
//             .then((result) => {
//                 res.json({
//                     data: result,
//                     message: "Data successfully uploaded",
//                     status: 200,
//                 });
//             })
//             .catch(err => {
//                 return next(err);
//             });
//     });
// });

// router.route("/").get(async (req, res, next) => {
//     await userSchema
//         .find()
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "All items successfully fetched",
//                 status: 200,
//             });
//         })
//         .catch(err => {
//             return next(err);
//         });
// });

// module.exports = router;








// let mongoose = require('mongoose');
// let express = require('express');
// const bcrypt = require('bcrypt'); 
// let router = express.Router();

// let userSchema = require("../models/user");

// router.route("/login").get(async (req, res, next) => {
//     await userSchema
//         .find()
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "Data successfully uploaded",
//                 status: 200,
//             });
      
//             console.log("USER ACCOUNT LOGGD")
//         })
//         .catch(err => {
//             return next(err);
//         });
//     res.render('', {user});
// });

// router.route("/signup").post(async (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         userSchema
//             .create({
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hash,
//                 confirmpassword: hash,
//             })
//             .then((result) => {
//                 res.json({
//                     data: result,
//                     message: "Data successfully uploaded",
//                     status: 200,
//                 });
//             })
//             .catch(err => {
//                 return next(err);
//             });
//     });
// });

// router.route("/").get(async (req, res, next) => {
//     await userSchema
//         .find()
//         .then((result) => {
//             res.json({
//                 data: result,
//                 message: "All items successfully fetched",
//                 status: 200,
//             });
//         })
//         .catch(err => {
//             return next(err);
//         });
// });



// router.route("/login").get(async (req, res, next) => {
//     console.log(req.body)
//     await userSchema
//                 .find({
//                     email: req.body.email,
//                 })
//                 .then((result) => {
//                     res.json({
//                         data: result,
//                     })
//                 })
//     console.log(hash);
//     // bcrypt.compare(req.body.password, hash.password, (err, result) => {
//     //     console.log("req.body.password: " + req.body.password);
//     //     console.log("hashed password:" + matchedAccount);
//     //     if(req.body.password == hash.password){
//     //         userSchema
//     //             .find()
//     //             .then((result) => {
//     //                 res.json({
//     //                     data: result,
//     //                     message: "Data successfully uploaded",
//     //                     status: 200,
//     //                 });
//     //                 console.log("USER ACCOUNT LOGGED IN.")
//     //             })
//     //             .catch(err => {
//     //                 return next(err);
//     //             });  

//     //     } else{
//     //         res.json({
//     //             success: false,
//     //             message: "Passwords do not match",
//     //         })
//     //     }   
//     // });
//     // res.render('', {user});
// });