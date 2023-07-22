const cryptoJS = require('crypto-js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const  ImageKit = require('imagekit')
const fs = require('fs')
const productSchema = require('../models/product')
const subcategorySchema = require('../models/subcategory')
const categorySchema = require('../models/category')

const imageKit = new ImageKit({
    publicKey:process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGE_KIT_END_URL
})


//function for handing success response message
exports.sendResponse = (res, message, data, status = 200) => res.status(status).json({ message, data })

//function for handing error response message
exports.errorResponse = (res, message, data, status = 500) => res.status(status).json({ message, errorLog: data })

//function for encryption
exports.encrypt = (planText) => cryptoJS.AES.encrypt(planText, 'secret key 123').toString()

//function for decrypt
exports.decrypt = (cipherText) => {
    var bytes = cryptoJS.AES.decrypt(cipherText, 'secret key 123');
    var originalText = bytes.toString(cryptoJS.enc.Utf8);
    return originalText
}

//function for creating token
exports.createToken = (json) => jwt.sign(json, 'secret', { expiresIn: '24h' })

//function for connecting mongodb database
exports.connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_SERVER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`).then(() => resolve('DB connected')).catch((e) => reject(e))
    })
}

//function upload file to imageKit
exports.uploadFile = (filePath,filename) => {
  return new Promise((resolve,reject)=>{
    fs.readFile(filePath,function(err, file){
        if(err){
            reject(error);
        }
        imageKit.upload({
            file : file, //required
            fileName : filename, //required
          }, function(error, result) {
            if(error) reject(error);
            else {
                fs.unlinkSync(filePath)
                resolve(result)
            };
          })
      })
    })
   
    
}

//function delete file to imageKit
exports.deleteFile = (file_id)=>{
    return new Promise((resolve,reject)=>{
        imageKit.deleteFile(file_id, function(error, result) {
            if(error) reject(error);
            else resolve(result);
        });
      })
}

//function delete files to imageKit
exports.deleteFiles = (ids)=>{
    return new Promise((resolve,reject)=>{
        imageKit.bulkDeleteFiles(ids, function(error, result) {
            if(error) reject(error);
            else resolve(result);
        });
      })
}

//function for removing all the products
exports.deleteProductsByQuery = async(query)=>{
    try{
        const allProductImage = await productSchema.find(query).select("image")
        if(allProductImage?.length>0){
            const fileIds = allProductImage?.map((v)=>v?.image?.fileId)
            await deleteFiles(fileIds)
        }
        return await productSchema.deleteMany(query)
    }catch(e){
        throw e
    }
}

//function for removing all the subCategories
exports.deleteSubCategoriesByQuery = async(query)=>{
    try{
        const allSubCategoryImage = await subcategorySchema.find(query).select("image")
        if(allSubCategoryImage?.length>0){
            const fileIds = allSubCategoryImage?.map((v)=>v?.image?.fileId)
            await deleteFiles(fileIds)
        }
        return await subcategorySchema.deleteMany(query)
    }catch(e){
        throw e
    }
}

//function for removing all the Categories
exports.deleteCategoriesByQuery = async(query)=>{
    try{
        const allCategoryImage = await categorySchema.find(query).select("image")
        if(allCategoryImage?.length>0){
            const fileIds = allCategoryImage?.map((v)=>v?.image?.fileId)
            await deleteFiles(fileIds)
        }
        return await categorySchema.deleteMany(query)
    }catch(e){
        throw e
    }
}