const mongoose = require('mongoose')
const subcategorySchema = require('../../models/subcategory')
const { errorResponse, sendResponse, uploadFile, deleteFile, deleteProductsByQuery } = require('../../utils')
const { genSlug } = require('../../helpers')


/*
 API URL: api/admin/subcategory/add
 Description: This api is for adding a new category.
*/
exports.add_subcategory = async (req, res) => {
    try {
        //try
        if(req?.file && req?.file?.filename){
        //UploadFile
        const imageDetails = await uploadFile(req?.file.path,req.file?.filename)
        if(imageDetails){
            req.body.image = imageDetails
        }
        }

        if(req.body.name){
            req.body.slug = genSlug(req.body.name)
        }

        const createCategory = new subcategorySchema(req.body)
        const data = await createCategory.save()
        const resPayload = {
            _id: data?._id,
            name: data?.name,
            category: data?.category,
            image: data?.image,
            active: data?.active,
            slug:data?.slug
        }

        return sendResponse(res, "SubCategory is created successfully!", resPayload, 201)
    } catch (error) {
        //catch for error
        if (error?.message) {
            if(error?.code===11000){
                //already taken
            return errorResponse(res,"SubCategory name already taken!", error, 400)
            }
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}

/*
 API URL: api/admin/subcategory/details/:id
 Description: This api is for updating a new category.
*/
exports.get_subcategory = async (req, res) => {
    try {
        //try
        const details = await subcategorySchema.findById({ _id: req.params?._id })
        if (!details || details?.length === 0) {
            //category does not exists
            return errorResponse(res, "SubCategory does not exists!", null, 404)
        }

        return sendResponse(res, "SubCategory is details fetched successfully!", { details }, 200)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}

/*
 API URL: api/admin/subcategory/list
 Description: This api is for updating a new category.
*/
exports.list_category = async (req, res) => {
    try {
        //try
        const list = await subcategorySchema.find()

        return sendResponse(res, "SubCategory is list fetched successfully!", { categories: list }, 200)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}

/*
 API URL: api/admin/subcategory/update
 Description: This api is for updating a new category.
*/
exports.update_category = async (req, res) => {
    try {

        if(req?.file && req?.file?.filename){
            //UploadFile
            const imageDetails = await uploadFile(req?.file.path,req.file?.filename)
            if(imageDetails){
                req.body.image = imageDetails
            }
            }

            if(req.body.name){
                req.body.slug = genSlug(req.body.name)
            }

        //try
        const updateCategory = await subcategorySchema.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params?._id) }, { $set: req.body })
        if (!updateCategory || updateCategory?.length === 0) {
            //category does not exists
            return errorResponse(res, "SubCategory does not exists!", null, 404)
        }

        if(req.body.image && updateCategory?.image?.fileId){
            await deleteFile(updateCategory?.image?.fileId)
        }

        if(req.body.name){
            req.body.name = genSlug(req.body.name)
        }

        return sendResponse(res, "SubCategory is updated successfully!", updateCategory, 200)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}

/*
 API URL: api/admin/subcategory/delete
 Description: This api is for deleting a new category.
*/
exports.delete_category = async (req, res) => {
    try {
        //try

        const deleteCategory = await subcategorySchema.findByIdAndDelete({ _id: req.params?._id })
        if (!deleteCategory || deleteCategory?.length === 0) {
            //category does not exists
            return errorResponse(res, "SubCategory does not exists!", null, 404)
        }
 
        if(deleteCategory?.image?.fileId){
            //delete file from cloud imageKit
            await deleteFile(deleteCategory?.image?.fileId)
        }

        //remove all the products
        await deleteProductsByQuery({category:deleteCategory?._id})

        return sendResponse(res, "SubCategory is deleted successfully!", deleteCategory, 200)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}