var slugify = require('slugify')


exports.genSlug = (text)=>{
   return slugify(text)
}