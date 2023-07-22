const mongoose = require('mongoose')

/*
Product Schema
name
image
active
description
category
subcategory
updatedAt
createdAt
price
active
*/
const schema = mongoose.Schema({
    name:{type:String,unique:true,required:true},
    description:{type:String,required:true},
    image:{type:Array,required:true},
    active:{type:Boolean,default:true},
    price:{type:Number,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'categories',required:true},
    subcategory:{type:mongoose.Schema.Types.ObjectId,ref:'subcategories'},
    slug:{type:String},
    featured:{type:Boolean,default:false}
},{timestamps:true})

module.exports = mongoose.model('product',schema)