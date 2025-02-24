const express = require('express')
const { ProductModel } = require('../model/product')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/',authMiddleware, async (req, res) => {
	console.log(req.user)
	if (req.user.userId != 'admin') {
		await req.status(403).json({ error: 'du admin ches' })
	}
	try {
		console.log(req.files);
		if (!req.files || !req.files.brandImg) {
			return res.status(400).json({ message: 'Image file is required ',vay:req.files})
		}
		const brandImage = req.files.brandImg
		const brandUpdateImage = Date.now() + brandImage.name
		const brandUploadPath = path.join(path.resolve(), '/uploads', brandUpdateImage)

		await brandImage.mv(brandUploadPath)

		if (!req.files || !req.files.imageUrl) {
			return res.status(400).json({ message: 'Image file is required .............' })
		}

		const image = req.files.imageUrl
		const updateImage = Date.now() + image.name
		const uploadPath = path.join(path.resolve(), '/uploads', updateImage)

		await image.mv(uploadPath)

		const newProduct = new ProductModel({
			brandImg: brandUpdateImage,
			brand: req.body.brand,
			name: req.body.name,
			price: req.body.price,
			imageUrl: updateImage,
			price: req.body.price,
			// imgArr: req.body.imgArr,
			// sizeArr: req.body.sizeArr,
			gender: req.body.gender
			
		})

		await newProduct.save()
		res.status(201).json(newProduct)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})
router.get('/',async (req,res)=>{
	try {
		const products = await ProductModel.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})


router.put('/:id',authMiddleware, async (req, res) => {
	console.log(req.user)
	if (req.user.userId != 'admin') {
		await req.status(403).json({ error: 'du admin ches' })
	}
	try {
		const { id } = req.params
		const { brand,name, price,gender } = req.body
		console.log(req.files);
		const productEdit = await ProductModel.findByIdAndUpdate(id,{  brand,name, price,gender  })
		res.status(200).send({ data: 'everything is ok you are edited the box' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

router.delete('/:id',authMiddleware, async (req, res) => {
	console.log(req.user);
	if(req.user.userId != 'admin'){
		await req.status(403).json({error:"du admin ches"})
	}
	try {
		const product = await ProductModel.findById(req.params.id)
		if (!product) return res.status(404).send({ data: 'Product not found' })
		const imagePath = path.join(path.resolve(), 'uploads', product.imageUrl) 
		if (fs.existsSync(imagePath)) {
			fs.unlinkSync(imagePath,()=>{})
		}
		await ProductModel.findByIdAndDelete(req.params.id)
		res.status(200).send({ data: 'Product image deleted successfully' })
	} catch (error) {
		res.status(500).send({ error:error.message })
	} 
})
module.exports=router