import { useEffect, useState } from 'react'
import { productApi } from '../../api/servicesApi'
import { DeleteBtn, MainDiv, Product, Products } from './styled'

export const Basket = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				console.error('No token found in localStorage')
				return
			}

			const response = await productApi.getBasket(token)
			setProduct(response.data)
		} catch (error) {
			console.error('Error fetching basket data:', error)
		} 
	}

	const deleteData = async id => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				console.error('No token found in localStorage')
				return
			}

			const response = await productApi.deleteBasket(id, token)
			console.log('Deleted item:', response)
			getData() // Refresh after deletion
		} catch (error) {
			console.error('Error deleting item:', error)
		}
	}

	const deleteAllData = async () => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				console.error('No token found in localStorage')
				return
			}

			const response = await productApi.deleteAllBasket(token)
			console.log('Deleted item:', response)
			getData() // Refresh after deletion
		} catch (error) {
			console.error('Error deleting item:', error)
		}
	}

	return (
		<MainDiv>
			<DeleteBtn onClick={deleteAllData}>DELETE ALL</DeleteBtn>
			<Products>
				{product.length > 0 ? (
					product.map(e => (
						<Product key={e._id}>
							<img
								src={`http://localhost:3001/uploads/${e.imageUrl}`}
								alt={e.brand}
							/>
							<p>Brand: {e.brand}</p>
							<p>Name: {e.name}</p>
							<p>Gender: {e.gender}</p>
							<div className='buttons'>
								<button onClick={() => deleteData(e._id)}>X</button>
							</div>
						</Product>
					))
				) : (
					<p>Your basket is empty.</p> // Show message if basket is empty
				)}
			</Products>
		</MainDiv>
	)
}
