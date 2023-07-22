const express = require('express')
const route = express.Router()
const adminProductController = require('../../controllers/admin/product')
var upload = require('../../middlewares/fileUploader');
/*
  Admin category routes 
*/

/*
Method:POST
API URL: api/admin/product/add
Description: This api is for admin add new product.
*/
route.post("/add",upload.array("image"), adminProductController.add_product)

/*
Method:PUT
API URL: api/admin/product/update
Description: This api is for admin update product.
*/
route.put("/update/:_id",upload.array("image"), adminProductController.update_product)

/*
Method:GET
API URL: api/admin/product/get
Description: This api is for admin get details using id product.
*/
route.get("/get/:_id", adminProductController.get_product)

/*
Method:GET
API URL: api/admin/product/list
Description: This api is for admin get product list.
*/
route.get("/list", adminProductController.list_product)

/*
 API URL: api/admin/product/category/:id
 Description: This api is for get all products by subcategory id
*/
route.get("/category/:_id", adminProductController.get_productCategory)

/*
 API URL: api/admin/product/subcategory/:id
 Description: This api is for get all products by subcategory id
*/
route.get("/subcategory/:_id", adminProductController.get_productSubCategory)

/*
Method:DELETE
API URL: api/admin/product/delete
Description: This api is for admin delete a product by id.
*/
route.delete("/delete/:_id", adminProductController.delete_product)




module.exports = route