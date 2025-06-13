// ✅ Ամբողջական փոփոխված React կոմպոնենտ Admin Product ավելացման և խմբագրման էջի համար

import { useEffect, useState } from 'react'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../../api/api'
import {
	Left,
	Right,
	MenuItems,
	MenueLink,
	Form,
	Label,
	Input,
	AdminDiv,
	Button,
	Products,
	Product,
} from './styled'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
	const [formData, setFormData] = useState({
		brandImg: null,
		brand: '',
		name: '',
		price: '',
		imageUrl: null,
		images:[],
		gender: '',
		category: '',
		stock: '',
		
	})

	const [product, setProduct] = useState([])
	const [editingProduct, setEditingProduct] = useState(null)
	const [newImage, setNewImage] = useState(null)
	const [brandNewImage, setBrandNewImage] = useState(null)
	const [images, setImages] = useState(null)

	const nav = useNavigate()

	useEffect(() => {
		addData()
	}, [])

	const addData = async () => {
		try {
			const token = localStorage.getItem('adminToken')
			const response = await getProduct(token)
			// console.log(response.status);
			if (response.status === 401) {
				nav('/login')
				return
			}
			setProduct(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const deleteData = async id => {
		const token = localStorage.getItem('adminToken')
		if (!token) {
			nav('/login')
			return
		}
		await deleteProduct(id, token)
		addData()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleFileChange = e => {
		setFormData({ ...formData, imageUrl: e.target.files[0] })
	}

	const handleFileChangeBrand = e => {
		setFormData({ ...formData, brandImg: e.target.files[0] })
	}

	const handleFileChangeImages = (event) => {
		const files = Array.from(event.target.files);
		setFormData({...formData,images:files})
	  };


	  
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const token = localStorage.getItem('adminToken')
			console.log(token);
			const data = new FormData()
			if (formData.brandImg) data.append('brandImg', formData.brandImg)
			data.append('brand', formData.brand)
			data.append('name', formData.name)
			data.append('price', formData.price)
			if (formData.imageUrl) data.append('imageUrl', formData.imageUrl)

			if (formData.images) data.append('images', formData.images)
	
			data.append('gender', formData.gender)
			data.append('category', formData.category)
			data.append('stock', formData.stock)
			// console.log(token);
			await createProduct(data, token)
			addData()

			setFormData({
				brandImg: null,
				brand: '',
				name: '',
				price: '',
				imageUrl: null,
				images: [],
				gender: '',
				category: '',
				stock: '',
			})
		} catch (error) {
			console.log(error)
		}
	}

	const startEdit = product => {
		setEditingProduct(product)
		setNewImage(null)
		setBrandNewImage(null)
		setImages([])
	}

	const handleEditChange = e => {
		const { name, value } = e.target
		setEditingProduct({ ...editingProduct, [name]: value })
	}

	const handleEditFileChange = e => {
		setNewImage(e.target.files[0])
	}

	const handleEditFileChangeBrand = e => {
		setBrandNewImage(e.target.files[0])
	}

	const handleEditFileChangeImages= e => {
		setImages(e.target.files)
	}
	const handleEditSubmit = async e => {
		e.preventDefault()
		try {
			const token = localStorage.getItem('adminToken')
			const data = new FormData()
			data.append('brandImg', brandNewImage)
			data.append('brand', editingProduct.brand)
			data.append('name', editingProduct.name)
			data.append('price', editingProduct.price)
			data.append('imageUrl', newImage)
			data.append('images', images)
			data.append('gender', editingProduct.gender)
			data.append('category', editingProduct.category)
			data.append('stock', editingProduct.stock)

			await updateProduct(editingProduct._id, data, token)
			addData()
			setEditingProduct(null)
		} catch (error) {
			console.error('Error updating data:', error)
		}
	}

	const items = [{ name: 'Products', path: '/' }]
	const genderOptions = [
		{ value: 'Man', label: 'Man' },
		{ value: 'Woman', label: 'Woman' },
		{ value: 'Baby', label: 'Baby' },
	]
	return (
		<>
			<AdminDiv>
				<Left>
					<MenuItems>
						{items.map((item, index) => (
							<MenueLink key={index} to={item.path}>
								{item.name}
							</MenueLink>
						))}
					</MenuItems>
				</Left>
				<Right>
					<Form onSubmit={handleSubmit}>
						<div>
							<Label>Brand image:</Label>
							<Input type='file' onChange={handleFileChangeBrand} />
						</div>
						<div>
							<Label>Brand:</Label>
							<Input type='text' name='brand' value={formData.brand} onChange={handleChange} required />
						</div>
						<div>
							<Label>Name:</Label>
							<Input type='text' name='name' value={formData.name} onChange={handleChange} required />
						</div>
						<div>
							<Label>Price:</Label>
							<Input type='number' name='price' value={formData.price} onChange={handleChange} required />
						</div>
						<div>
							<Label>Gender:</Label>
							<select name='gender' value={formData.gender} onChange={handleChange} required>
								<option value='' disabled>Select gender</option>
								{genderOptions.map(option => (
									<option key={option.value} value={option.value}>{option.label}</option>
								))}
							</select>
						</div>
						<div>
							<Label>Category:</Label>
							<Input type='text' name='category' value={formData.category} onChange={handleChange} required />
						</div>
						<div>
							<Label>Stock:</Label>
							<Input type='number' name='stock' value={formData.stock} onChange={handleChange} required />
						</div>
						<div>
							<Label>Image:</Label>
							<Input type='file' onChange={handleFileChange} />
						</div>
						<div>
							<Label>Product Images:</Label>
							<Input type="file" multiple onChange={handleFileChangeImages} />
						</div>
						<Button type='submit'>Add Product</Button>
					</Form>

					{editingProduct && (
						<Form onSubmit={handleEditSubmit}>
							<h3>Edit Product</h3>
							<div>
								<Label>Brand image:</Label>
								<Input type='file' onChange={handleEditFileChangeBrand} />
							</div>
							<div>
								<Label>Brand:</Label>
								<Input type='text' name='brand' value={editingProduct.brand} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Name:</Label>
								<Input type='text' name='name' value={editingProduct.name} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Price:</Label>
								<Input type='number' name='price' value={editingProduct.price} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Gender:</Label>
								<Input type='text' name='gender' value={editingProduct.gender} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Category:</Label>
								<Input type='text' name='category' value={editingProduct.category} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Stock:</Label>
								<Input type='number' name='stock' value={editingProduct.stock} onChange={handleEditChange} required />
							</div>
							<div>
								<Label>Image:</Label>
								<Input type='file' onChange={handleEditFileChange} />
							</div>
							<div>
								<Label>Product Images:</Label>
								<Input type="file" multiple onChange={handleEditFileChangeImages} />
							</div>
							<Button type='submit'>Save Changes</Button>
							<Button type='button' onClick={() => setEditingProduct(null)}>Cancel</Button>
						</Form>
					)}

					<Products>
						{product.map((product, index) => (
							<Product key={index}>
								<img src={`http://localhost:3001/uploads/${product.brandImg}`} alt={product.brand} />
								<p>Brand: {product.brand}</p>
								<p>Name: {product.name}</p>
								<p>Price: {product.price}</p>
								<p>Gender: {product.gender}</p>
								<p>Category: {product.category}</p>
								<p>Stock: {product.stock}</p>
								<img src={`http://localhost:3001/uploads/${product.imageUrl}`} alt={product.name} />
								<div className='images'>
									{product.images && product.images.map((e,i)=>{
										return(
											<div key={i} >
												<p>i</p>
												<img src={`http://localhost:3001/uploads/${e}`} alt={e.name} />
											</div>
										)
									})}
								</div>
								<div className='buttons'>
									<button onClick={() => deleteData(product._id)}>X</button>
									<button onClick={() => startEdit(product)}>Edit</button>
								</div>
							</Product>
						))}
					</Products>
				</Right>
			</AdminDiv>
		</>
	)
}

export default AddProduct
