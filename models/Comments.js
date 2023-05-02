const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: [true, 'please enter a description']
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        required: true
    },
    postId: {
        type:mongoose.Schema.ObjectId,
        required: true
    }
})