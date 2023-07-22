const mongoose = require('mongoose')
const productSchema = require('../../models/product')
const { errorResponse, sendResponse, uploadFile, deleteFile } = require('../../utils')
const { genSlug } = require('../../helpers')


/*
 API URL: api/admin/product/add
 Description: This api is for adding a new product.
*/
exports.add_product = async (req, res) => {
    try {
        // console.log(req.files)
        //try
        if (req.files && req.files?.length !== 0) {
            //UploadFile

            const imagesArray = req.files?.map(async (file) => await uploadFile(file.path, file?.filename))
            req.body.image = await Promise.all(imagesArray)
            if (req.body.image?.length == 0) {
                return errorResponse(res, "Image uploading failed!", null, 500)
            }
        } else {
            return errorResponse(res, "Images is missing", null, 400)
        }

        if (req.body.name) {
            req.body.slug = genSlug(req.body.name)
        }

        const createProduct = new productSchema(req.body)
        const data = await createProduct.save()
        const resPayload = {
            _id: data?._id,
            name: data?.name,
            image: data?.image,
            category: data?.category,
            subcategory: data?.subcategory,
            description: data?.description,
            price: data?.price,
            active: data?.active,
            slug: data?.slug
        }

        return sendResponse(res, "Product is created successfully!", resPayload, 201)
    } catch (error) {
        //catch for error
        if (error?.message) {
            if (error?.code === 11000) {
                //already taken
                return errorResponse(res, "Product name already taken!", error, 400)
            }
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}

/*
 API URL: api/admin/product/details/:id
 Description: This api is for getting details about the product
*/
exports.get_product = async (req, res) => {
    try {
        //try
        const details = await productSchema.findById({ _id: req.params?._id })
        if (!details || details?.length === 0) {
            //product does not exists
            return errorResponse(res, "Product does not exists!", null, 404)
        }

        return sendResponse(res, "Product is details fetched successfully!", { details }, 200)
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
 API URL: api/admin/product/list
 Description: This api is for getting list of products.
*/
exports.list_product = async (req, res) => {
    try {
        //try
        const list = await productSchema.find()

        return sendResponse(res, "Product is list fetched successfully!", { categories: list }, 200)
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
 API URL: api/admin/product/update
 Description: This api is for updating a product.
*/
exports.update_product = async (req, res) => {
    try {

        if (req.files && req.files?.length !== 0) {
            //UploadFile

            const imagesArray = req.files?.map(async (file) => await uploadFile(file.path, file?.filename))
            req.body.image = await Promise.all(imagesArray)
            if (req.body.image?.length == 0) {
                return errorResponse(res, "Image uploading failed!", null, 500)
            }
        } else {
            return errorResponse(res, "Images is missing", null, 400)
        }


        //try
        const productCategory = await productSchema.findByIdAndUpdate({ _id: new mongoose.Types.ObjectId(req.params?._id) }, { $set: req.body })
        if (!productCategory || productCategory?.length === 0) {
            //category does not exists
            return errorResponse(res, "Product does not exists!", null, 404)
        }
       const deleted = req.body.image.map(async(image)=>{
            await productCategory?.image.map(async(OldImage)=>{
                if (image && OldImage?.fileId) {
                    await deleteFile(OldImage?.fileId)
                }
            })
        })
        //deleted all old images
         await Promise.all(deleted)

        return sendResponse(res, "Product is updated successfully!", productCategory, 200)
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
 API URL: api/admin/product/delete
 Description: This api is for deleting product.
*/
exports.delete_product = async (req, res) => {
    try {
        //try

        const deleteProduct = await productSchema.findByIdAndDelete({ _id: req.params?._id })
        if (!deleteProduct || deleteProduct?.length === 0) {
            //category does not exists
            return errorResponse(res, "Product does not exists!", null, 404)
        }
        if (deleteProduct?.image?.length!==0) {
            //remove file from cloud imageKit
          const d = await Promise.all(deleteProduct?.image.map(async(image)=>await deleteFile(image?.fileId)))
        }

        return sendResponse(res, "Product is deleted successfully!", deleteProduct, 200)
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
 API URL: api/admin/product/category/:id
 Description: This api is for get all products by category id
*/
exports.get_productCategory = async (req, res) => {
    try {
        //try
        const details = await productSchema.aggregate([
            {
                $match: { category: new mongoose.Types.ObjectId(req.params?._id) }
            },
            {
                $lookup: {
                    from: 'categories',
                    foreignField: '_id',
                    localField: 'category',
                    as: "categoryDetails"
                }
            },
            {
                $lookup: {
                    from: 'subcategories',
                    foreignField: '_id',
                    localField: 'subcategory',
                    as: "subcategoryDetails"
                }
            }
        ])
        if (details?.length === 0) {
            //product does not exists
            return errorResponse(res, "Product does not exists!", null, 404)
        }

        return sendResponse(res, "Products is details fetched successfully!", { details }, 200)
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
 API URL: api/admin/product/subcategory/:id
 Description: This api is for get all products by subcategory id
*/
exports.get_productSubCategory = async (req, res) => {
    try {
        //try
        const details = await productSchema.aggregate([
            {
                $match: { subcategory: new mongoose.Types.ObjectId(req.params?._id) }
            },
            {
                $lookup: {
                    from: 'categories',
                    foreignField: '_id',
                    localField: 'category',
                    as: "categoryDetails"
                }
            },
            {
                $lookup: {
                    from: 'subcategories',
                    foreignField: '_id',
                    localField: 'subcategory',
                    as: "subcategoryDetails"
                }
            }
        ])
        if (details?.length === 0) {
            //product does not exists
            return errorResponse(res, "Product does not exists!", null, 404)
        }

        return sendResponse(res, "Products is details fetched successfully!", { details }, 200)
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
