const express = require('express')
const route = express.Router()
const adminCategoryController = require('../../controllers/admin/category')
var upload = require('../../middlewares/fileUploader');
/*
  Admin category routes 
*/

/*
Method:POST
API URL: api/admin/category/add
Description: This api is for admin add new category.
*/
route.post("/add",upload.single("image"), adminCategoryController.add_category)

/*
Method:PUT
API URL: api/admin/category/update
Description: This api is for admin update category.
*/
route.put("/update/:_id",upload.single("image"), adminCategoryController.update_category)

/*
Method:GET
API URL: api/admin/category/get
Description: This api is for admin get details using id category.
*/
route.get("/get/:_id", adminCategoryController.get_category)

/*
Method:GET
API URL: api/admin/category/list
Description: This api is for admin get category list.
*/
route.get("/list", adminCategoryController.list_category)


/*
Method:DELETE
API URL: api/admin/category/delete
Description: This api is for admin add new category.
*/
route.delete("/delete/:_id", adminCategoryController.delete_category)


module.exports = route