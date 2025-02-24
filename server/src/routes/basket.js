const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const { ProductModel } = require('../model/product')
const authMiddleware = require('../middleware/authMiddleware')
const { UserModel } = require('../model/user')

router.post('/:id', authMiddleware, async (req, res) => {
	const user = await UserModel.findById(req.user.userId)
	const { id } = req.params
	if (!user.basket.includes(id)) {
		user.basket.push(req.params.id)
		await user.save()
		res.status(200).json({ data: 'succsess' })
	} else {
		res.status(400).json({ data: 'Product already in the array' })
	}
})

router.get('/', authMiddleware, async (req, res) => {
	// console.log(res.user);
	const user = await UserModel.findById(req.user.userId)
	console.log(user);
	const products = await ProductModel.find({ _id: { $in: user.basket } })
	res.status(200).json(products)
})

router.delete('/:id', authMiddleware, async (req, res) => {
	console.log(req.user)
	try {
	const user = await UserModel.findById(req.user.userId)
	user.basket = user.basket.filter(e => e  != req.params.id)
	await user.save()
		res.status(200).send({ data: 'Product image deleted successfully' })
	} catch (error) {
		res.status(500).send({ error: error.message })
	}
})
router.delete('/', authMiddleware, async (req, res) => {
	try {
	const user = await UserModel.findById(req.user.userId)
		user.basket=[]
		await user.save()
		res.status(200).send({ data: 'Product image deleted successfully' })
	} catch (error) {
		res.status(500).send({ error: error.message })
	}
})

module.exports = router
