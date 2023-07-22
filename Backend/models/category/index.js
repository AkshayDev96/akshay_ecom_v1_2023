const mongoose = require('mongoose')

/*
Category Schema
name
image
active
updatedAt
createdAt
active
*/
const schema = mongoose.Schema({
    name:{type:String,unique:true,required:true},
    image:{type:Object,required:true},
    active:{type:Boolean,default:true},
    slug:{type:String}
},{timestamps:true})

module.exports = mongoose.model('category',schema)