const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let foodSchema = new Schema({
    userBlogs: [{
        title: {
            type: String,
        }, 
        description: {
            type: String,
        },
        dishOrigin:{
            type: String,
        },
        category: {
            type: String,
        },
        rating: [{
            thumbsUp: {
                type: Number,
            },
            thumbsDown: {
                type: Number,
            }
        }]
    }],
}, {
    collection: 'blogs', 
        
})


module.exports = mongoose.model('Blog', foodSchema)
