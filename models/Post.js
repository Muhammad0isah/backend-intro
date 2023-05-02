const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: [true, 'please enter a description']
    },
    image: {
        type: String,
    },
    user:{
        type:mongoose.Schema.ObjectId
    }
})