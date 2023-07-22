const express = require('express')
const route = express.Router()
const publicCategoryController = require('../../controllers/public')

/*
  Public category routes 
*/

/*
Method:GET
API URL: api/category/get
Description: This api is for public get details using id category.
*/
route.get("/category/get/:_id", publicCategoryController.get_category)

/*
Method:GET
API URL: api/category/list
Description: This api is for public get category list.
*/
route.get("/category/list", publicCategoryController.list_category)

/*
Method:GET
API URL: api/products/list
Description: This api is for public get products list.
*/
route.get("/products/list", publicCategoryController.list_products)

/*
Method:DELETE
API URL: api/admin/category/product/delete
Description: This api is for admin delete a product by id.
*/
route.get("/products/category_products", publicCategoryController.list_category_products)

module.exports = route