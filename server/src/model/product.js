const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  brandImg: { type: String },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  descr:{typeof:String},
  price: { type: Number, required: true },
  imageUrl: { type: String },
  images:{type:Array},
  gender: { type: String },
  category: { type: String, required: true }, 
  stock: { type: Number, required: true },  
  sizes:{type:Array},
  code:{type:Number},
})

const ProductModel = mongoose.model('product', productSchema)
module.exports.ProductModel = ProductModel
