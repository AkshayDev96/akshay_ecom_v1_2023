const express = require('express')
const route = express.Router()


route.use('/admin',require('./admin'))
route.use('/admin/category',require('./admin/category'))
route.use('/admin/subcategory',require('./admin/subcategory'))
route.use('/admin/product',require('./admin/product'))
route.use(require('./public'))


module.exports = route