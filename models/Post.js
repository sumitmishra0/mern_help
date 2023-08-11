const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required:true,
        maxLength:20,
    },
    description: {
        type:String,
        required:false,
        maxLength:50,
    },
    picUrl:{
        type:String,
        required:false,
        maxLength:100,
    },
    like:{
        type:Boolean,
        required:true,
        default:false,
    },
    comments: {
        type: Array,
        required:true,
        default: [],  
    },
    createdAt: {
        type: Date,
        required:true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Post',postSchema);