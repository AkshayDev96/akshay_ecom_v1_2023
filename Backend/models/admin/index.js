const mongoose = require('mongoose')

/*
Admin Schema
username
password
createdAt
updatedAt
active
*/
const schema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    active:{type:Boolean,default:true},
},{timestamps:true})

module.exports = mongoose.model('admin',schema)