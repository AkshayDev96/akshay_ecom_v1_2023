const categorySchema = require('../../models/category')
const productSchema = require('../../models/product')
const { errorResponse, sendResponse } = require('../../utils')

/*
 API URL: api/category/details/:id
 Description: This api is for lists category.
*/
exports.get_category = async (req, res) => {
    try {
        //try
        const details = await categorySchema.findById({ _id: req.params?._id })
        if (!details || details?.length === 0) {
            //category does not exists
            return errorResponse(res, "Category does not exists!", null, 404)
        }

        return sendResponse(res, "Category is details fetched successfully!", { details }, 200)
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
 API URL: api/category/list
 Description: This api is for list category with subcategories.
*/
exports.list_category = async (req, res) => {
    try {
        //try
        const list = await categorySchema.aggregate([
            {
                $lookup: {
                    from: "subcategories",
                    localField: "_id",
                    foreignField: "category",
                    as: "subcategories"
                }
            }
        ])

        return sendResponse(res, "Category is list fetched successfully!", { categories: list }, 200)
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
 API URL: api/products/list
 Description: This api is for list of products with category and subcategory.
*/
exports.list_products = async (req, res) => {
    try {
        //try
        const details = await productSchema.aggregate([

            {
                $lookup: {
                    from: 'categories',
                    foreignField: '_id',
                    localField: 'category',
                    as: "categories"
                }
            },
            {
                $lookup: {
                    from: 'subcategories',
                    foreignField: '_id',
                    localField: 'subcategory',
                    as: "subcategories"
                }
            }, {
                $sort: { createdAt: -1 }
            },
            {
                $limit: parseInt(req.query?.limit)
            }
        ])
        if (details?.length === 0) {
            //product does not exists
            return sendResponse(res, "Product does not exists!", [], 200)
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
 API URL: api/category_products/list
 Description: This api is for list of products with category and subcategory.
*/
exports.list_category_products = async (req, res) => {
    try {
        //try
        const details = await categorySchema.aggregate([
            {
                $lookup: {
                    from: 'products',
                    as: 'products',
                    let: { indicator_id: '$_id',featuredMatch:req.query?.featured==="true"?true:false },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $and:[{$eq: ['$category', '$$indicator_id']},{$eq: ['$featured', '$$featuredMatch']}] }
                            }
                        },
                        { $sort: { updatedAt: -1 } }, 
                        { $limit: parseInt(req.query?.product_limit) }
                    ]
                }
            },
            {
                $sort: { createdAt: 1 }
            },
            {
                $limit: parseInt(req.query?.category_limit)
            }
        ])
        if (details?.length === 0) {
            //product does not exists
            return sendResponse(res, "Product does not exists!", [], 200)
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
