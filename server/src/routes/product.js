const express = require('express')
const { ProductModel } = require('../model/product')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, async (req, res) => {
	if (req.user.userId != 'admin') {
		return res.status(403).json({ error: 'du admin ches' })
	}
	try {
		if (!req.files || !req.files.brandImg || !req.files.imageUrl) {
			return res.status(400).json({ message: 'Բոլոր պատկերները պարտադիր են' })
		}

		const brandImage = req.files.brandImg
		const brandUpdateImage = Date.now() + brandImage.name
		const brandUploadPath = path.join(path.resolve(), '/uploads', brandUpdateImage)
		await brandImage.mv(brandUploadPath)

		const image = req.files.imageUrl
		const updateImage = Date.now() + image.name
		const uploadPath = path.join(path.resolve(), '/uploads', updateImage)
		await image.mv(uploadPath)

		// const images=req.files
		// console.log(images,"\n\n\n");
		// images && images.length>0 && images.forEach((e,i )=> {
		// 	path.join(path.resolve(), '/uploads', Date.now() + i + e.name)
		// 	return  Date.now() + i + e.name
		// })
		// // console.log(images);
		// await image.mv(images)


		const newProduct = new ProductModel({
			brandImg: brandUpdateImage,
			brand: req.body.brand,
			name: req.body.name,
			descr: req.body.descr,
			price: req.body.price,
			imageUrl: updateImage,
			// images:images,
			gender: req.body.gender,
			category: req.body.category,
			stock: req.body.stock,
			sizes: req.body.sizes,
			code: req.body.code,
		})

		await newProduct.save()
		res.status(201).json(newProduct)
	} catch (error) {
		res.status(500).json({ error: error.message})
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


router.put('/:id', authMiddleware, async (req, res) => {
	if (req.user.userId != 'admin') {
		return res.status(403).json({ error: 'du admin ches' })
	}
	try {
		const { id } = req.params
		const updateFields = {
			brand: req.body.brand,
			name: req.body.name,
			price: req.body.price,
			gender: req.body.gender,
			category: req.body.category,
			stock: req.body.stock
		}

		// Handle image updates
		if (req.files) {
			if (req.files.imageUrl) {
				const image = req.files.imageUrl
				const updateImage = Date.now() + image.name
				const uploadPath = path.join(path.resolve(), '/uploads', updateImage)
				await image.mv(uploadPath)
				updateFields.imageUrl = updateImage
			}
			if (req.files.brandImg) {
				const brandImage = req.files.brandImg
				const brandUpdateImage = Date.now() + brandImage.name
				const brandUploadPath = path.join(path.resolve(), '/uploads', brandUpdateImage)
				await brandImage.mv(brandUploadPath)
				updateFields.brandImg = brandUpdateImage
			}
		}

		await ProductModel.findByIdAndUpdate(id, updateFields)
		res.status(200).json({ message: 'Product updated successfully' })
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