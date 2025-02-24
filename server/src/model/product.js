const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
	brandImg: { type: String },
	brand: { type: String, required: true },
	name: { type: String, required: true },
	price: { type: Number, required: true },
	imageUrl: { type: String },
	gender: { type: String },
})

const ProductModel = mongoose.model('product', productSchema)
module.exports.ProductModel = ProductModel
