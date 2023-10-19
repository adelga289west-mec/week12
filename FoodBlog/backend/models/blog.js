const mongoose = require("mongoose")
const Schema= mongoose.Schema

let foodSchema = new Schema({
  
    title: {
        type: String,
    }, 
    description: {
        type: String,
    }, 
    content: {
        type: String,
    },
    dishOrigin:{
        type: String

    },
    category: {
        type: String
    }
}, {
    collection: 'blogs', 
})
module.exports = mongoose.model('Blog', foodSchema)