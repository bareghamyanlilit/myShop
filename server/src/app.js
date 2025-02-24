require('dotenv').config()
const PORT = 3001
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/auth'
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const fs = require('fs')
const path = require('path')
const uploadPath = path.join(path.resolve(), 'uploads')
if (!fs.existsSync(uploadPath)) {
	fs.mkdirSync(uploadPath, { recursive: true })
}
app.use(fileUpload())
app.use('/uploads', express.static(uploadPath))

app.use(bodyParser.json())
app.use(cors())
mongoose
	.connect(url)
	.then(res => console.log('Connected to DB'))
	.catch(error => console.log(error))

app.use('/api/basket', require('./routes/basket'))

app.use('/api/auth', require('./routes/auth'))

app.use('/api/product', require('./routes/product'))

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`)
})
