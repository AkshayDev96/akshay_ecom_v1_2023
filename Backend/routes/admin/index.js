const express = require('express')
const route = express.Router()
const adminController = require('../../controllers/admin')

/*
  Admin routes 
*/

/*
Method: POST
API URL: api/admin/register
Description: This api is for admin registration.
*/
route.post("/register", adminController.register)

/*
Method: POST
API URL: api/admin/login
Description: This api is for admin login.
*/
route.post("/login", adminController.login)

module.exports = route