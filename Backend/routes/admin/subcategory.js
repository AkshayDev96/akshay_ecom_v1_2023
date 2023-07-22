const express = require('express')
const route = express.Router()
const adminSubCategoryController = require('../../controllers/admin/subcategory')
var upload = require('../../middlewares/fileUploader');
/*
  Admin subcategory routes 
*/

/*
Method:POST
API URL: api/admin/subcategory/add
Description: This api is for admin add new category.
*/
route.post("/add",upload.single("image"), adminSubCategoryController.add_subcategory)

/*
Method:PUT
API URL: api/admin/subcategory/update
Description: This api is for admin update category.
*/
route.put("/update/:_id",upload.single("image"), adminSubCategoryController.update_category)

/*
Method:GET
API URL: api/admin/subcategory/get
Description: This api is for admin get details using id category.
*/
route.get("/get/:_id", adminSubCategoryController.get_subcategory)

/*
Method:GET
API URL: api/admin/subcategory/list
Description: This api is for admin get category list.
*/
route.get("/list", adminSubCategoryController.list_category)


/*
Method:DELETE
API URL: api/admin/subcategory/delete
Description: This api is for admin delete category by using id.
*/
route.delete("/delete/:_id", adminSubCategoryController.delete_category)


module.exports = route