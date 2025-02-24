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
		gender: '',
		
	})
	const [product, setProduct] = useState([])
	const [editingProduct, setEditingProduct] = useState(null) // State Product edited
	const [newImage, setNewImage] = useState(null) // State new image editing
	const [brandNewImage, setBrandNewImage] = useState(null) // State new image editing
  const [selectedOption, setSelectedOption] = useState('')
	const nav = useNavigate()

	useEffect(() => {
		addData()
	}, [])
	const addData = async () => {
		try {
			const token = localStorage.getItem('adminToken')
			const response = await getProduct(token)
			console.log(response.status)
			if (response.status == 401) {
				nav('/login')
				return
			}
			setProduct(response.data)
		} catch (error) {
			console.log(88)
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
		addData() // Refresh after deletion
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

	const handleSubmit = async e => {
		try {
			const token = localStorage.getItem('adminToken')
			e.preventDefault()
			const data = new FormData()
			if (formData.brandImg) data.append('brandImg', formData.brandImg)
			data.append('brand', formData.brand)
			data.append('name', formData.name)
			data.append('price', formData.price)
			if (formData.imageUrl) data.append('imageUrl', formData.imageUrl)
			data.append('gender', formData.gender)
			// console.log(formData.brandImg)
			// console.log(8,data,formData);
			const res =await createProduct(data, token)
			console.log(res.data);
			addData() // Refresh  after adding

			setFormData({ brandImg: null, name: '', brand: '', price: '',gender: '', imageUrl: null }) // Reset form
		} catch (error) {
			console.log(error)
		}
	}

	const startEdit = product => {
		setEditingProduct(product) // Set the Product to be edited
		setNewImage(null) // Reset new image state
	}

	const handleEditChange = e => {
		const { name, value } = e.target
		setEditingProduct({ ...editingProduct, [name]: value }) // Update data
	}

	const handleEditFileChange = e => {
		setNewImage(e.target.files[0]) // Update new image
	}
	const handleEditFileChangeBrand = e => {
		setBrandNewImage(e.target.files[0]) // Update new image
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
			data.append('gender', editingProduct.gender)
			console.log(brandNewImage,newImage)

			await updateProduct(editingProduct._id, data, token)

			addData() // Refresh after editing
			setEditingProduct(null) // Close edit form
		} catch (error) {
			console.error('Error updating data:', error)
		}
	}

	const items = [{ name: 'Products', path: '/' }]
	const options = [
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
							<Input
								type='text'
								name='brand'
								value={formData.brand}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Label>Name:</Label>
							<Input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Label>Price:</Label>
							<Input
								type='number'
								name='price'
								value={formData.price}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Label>Gender:</Label>
							{/* <Input
								type='text'
								name='gender'
								value={formData.gender}
								onChange={handleChange}
								required
							/> */}
							<select
								name='gender' // Match the field name in the state
								value={formData.gender} // Bind to the gender field in the state
								onChange={handleChange} // Update state on change
								required
								>
								<option value='' disabled>Select a gender</option> {/* Default option */}
								{options.map((option) => (
									<option key={option.value} value={option.value}>
									{option.label}
									</option>
								))}
							</select>
							{/* <select>
								<option value='option1'>Option 1</option>
								<option value='option2'>Option 2</option>
								<option value='option3'>Option 3</option>
							</select> */}
						</div>
						<div>
							<Label>Image:</Label>
							<Input type='file' onChange={handleFileChange} />
						</div>
						<Button type='submit'>Add Product</Button>
					</Form>

					{editingProduct && ( // Render the edit form if a Product is being edited
						<Form onSubmit={handleEditSubmit}>
							<h3>Edit Product</h3>
							<div>
								<Label>Brand image:</Label>
								<Input type='file' onChange={handleEditFileChangeBrand} />
							</div>
							<div>
								<Label>Name:</Label>
								<Input
									type='text'
									name='name'
									value={editingProduct.name}
									onChange={handleEditChange}
									required
								/>
							</div>
							<div>
								<Label>Brand:</Label>
								<Input
									type='text'
									name='brand'
									value={editingProduct.brand}
									onChange={handleEditChange}
									required
								/>
							</div>
							<div>
								<Label>Price:</Label>
								<Input
									type='number'
									name='price'
									value={editingProduct.price}
									onChange={handleEditChange}
									required
								/>
							</div>
							<div>
								<Label>Gender:</Label>
								<Input
									type='text'
									name='gender'
									value={editingProduct.gender}
									onChange={handleEditChange}
									required
								/>
							</div>
							<div>
								<Label>Image:</Label>
								<Input type='file' onChange={handleEditFileChange} />
							</div>
							<Button type='submit'>Save Changes</Button>
							<Button type='button' onClick={() => setEditingProduct(null)}>
								Cancel
							</Button>
						</Form>
					)}

					<Products>
						{product.map((product, index) => (
							<Product key={index}>
								<img
									src={`http://localhost:3001/uploads/${product.brandImg}`}
									alt={product.brand}
								/>
								<p>Brand: {product.brand}</p>
								<p>Name: {product.name}</p>
								<p>Price: {product.price}</p>
								<p>Gender: {product.gender}</p>
								<img
									src={`http://localhost:3001/uploads/${product.imageUrl}`}
									alt={product.name}
								/>
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
