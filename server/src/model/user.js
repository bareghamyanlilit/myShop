const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	isVerified: { type: Boolean, default: false },
	role: { type: String, default: 'client' },
	basket:{type:Array},
	buy:{type:Array},
	verificationCode: String,
	resetCode:String
})

const UserModel = mongoose.model('user', userSchema)
module.exports.UserModel = UserModel
