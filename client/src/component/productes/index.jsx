// import { useTranslation } from 'react-i18next'
// import { ProductsArr } from '../../constant/items'
// import { Counter, Product, Products } from './styled'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// export const ProductsPart = ({setBasketCount}) => {
// 	const { t } = useTranslation()
	// const [quantities, setQuantities] = useState(
	// 	Array(ProductsArr.length).fill(0) // Initialize quantities to 0
	// )

	// const updateQuantity = (index, change) => {
	// 	setQuantities(prev => {
	// 		const newQuantities = [...prev]
	// 		newQuantities[index] = Math.max(
	// 			0,
	// 			Math.min(newQuantities[index] + change, 10)
	// 		) 
	// 		return newQuantities
	// 	})
	// }
// 	const addToBasket = (i) => {
// 		const basket = JSON.parse(localStorage.getItem("basket"))
// 		let result = basket.some(e => e.src === ProductsArr[i].src)
// 		if(result) return
// 		basket.push(ProductsArr[i])
// 		localStorage.setItem("basket" , JSON.stringify(basket))
// 		setBasketCount(basket.length)
// 	}
// 	return (
// 		<>
			// <Products >
			// 	{ProductsArr.map((e, i) => (
			// 		<Product key={e + i}>
			// 			<Link style={{width:"100%"}} to={`/product/${e.id}`} state={e}>
			// 				<img src={e.src} gender={e.gender} />
			// 			</Link>
			// 			<div className='txt'>
			// 				<p>
			// 					{e.name && e.name.split('').length > 20 ? e.name.substring(0,18) + ' ...' : e.name }
			// 				</p>
			// 				<p>
			// 					{t('Price')}: {e.price}
			// 				</p>
			// 				<div className='info'>
			// 					<Counter>
			// 						<button onClick={() => updateQuantity(i, -1)}>-</button>
			// 						<h1>{quantities[i]}</h1>
			// 						<button onClick={() => updateQuantity(i, 1)}>+</button>
			// 					</Counter>
			// 					<button className='like' onClick={() => addToBasket(i)}>
			// 						❤️
			// 					</button>
			// 				</div>
			// 			</div>
			// 		</Product>
			// 	))}
			// </Products>
// 		</>
// 	)
// }

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { productApi } from '../../api/servicesApi'
import { Counter, FilterDiv, MainDiv, Product, Products } from './styled'
import { Link } from 'react-router-dom'
// import { BiBasket } from 'react-icons/bi'
export const ProductsPart = () => {
	const { t } = useTranslation()
	const [product, setProduct] = useState([])
	const [filtered, setFiltered] = useState([])
	useEffect(() => {
		getData()
	}, [])
	const getData = async () => {
		const response = await productApi.getProduct()
		setProduct(response.data)
		console.log(response.data);
	}
	const buy = async id => {
		const token = localStorage.getItem('token')
		if (!token) {
			alert('You must be logged in')
			return
		}
		console.log(token, id)
		const response = await productApi.addToBuy(token, id)
		console.log(response.data)
	}

	const addToBasket = async id => {
		const token = localStorage.getItem('token')
		if (!token) {
			alert('You must be logged in')
			return
		}
		console.log(token, id)
		const response = await productApi.addToBasket(token, id)
		console.log(response.data)
	}
	const handleChangeFilter=(e)=>{
		const newArr=product.filter(el=>el.gender.toLowerCase().includes(e.target.textContent.toLowerCase()))
		setFiltered(newArr)
		console.log(product);
	}
	const handleChangeSearchFilter=(e)=>{
		if (e.target.value.toLowerCase() === 'all') {
			setFiltered(product)
			return
		}
		console.log(e.target.value);
		const newArr=product.filter(el=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))
		setFiltered(newArr)
	}
	const handleChangeFilterMin=(e)=>{
		console.log(e.target.value);
		const newArr=product.filter(el=>el.price >= e.target.value)
		setFiltered(newArr)
	}
	const handleChangeFilterMax=(e)=>{
		console.log(e.target.value);
		const newArr = product.filter(el => el.price <= e.target.value)
		setFiltered(newArr)
	}


	return (
		<>
			<MainDiv>
				<FilterDiv>
					<div className="filtertesak">
						<button onClick={handleChangeFilter}>All</button>
						<button onClick={handleChangeFilter}>Man</button>
						<button onClick={handleChangeFilter}>Woman</button>
						<button onClick={handleChangeFilter}>Baby</button>
					</div>
					<div className="filter">
						<input className='search' placeholder='search...' onChange={handleChangeSearchFilter} />
						<div className='filterPrice'>
							<input
								type='number'
								placeholder='min...'
								onChange={handleChangeFilterMin}
							/>
							<input
								type='number'
								placeholder='max...'
								onChange={handleChangeFilterMax}
							/>
						</div>
					</div>
				</FilterDiv>
				<Products>
					{filtered.length > 0
						? filtered.map((e, i) => {
								return (
									console.log(e),
									<Product key={e._id}>\
										<img
											src={`http://localhost:3001/uploads/${e.imageUrl}`}
											gender={e.gender}
										/>
										<Link style={{ width: '100%' }} to={`/product/${e._id}`} state={e} >
											<div className='txt'>
												<p>
													{e.name && e.name.split('').length > 20
														? e.name.substring(0, 18) + ' ...'
														: e.name}
												</p>
												<p>{t('Price')}: {e.price}</p>
												<div className='info'>
													<button className='addBasket' onClick={() => addToBasket(e._id)}>Add to basket</button>
													<button className='buy addBasket' onClick={() => buy(e._id)}>Buy</button>
												</div>
											</div>
										</Link>
									</Product>
								)
						  })
						: product.map((e, i) => {
								return (
									<Product key={e._id}>
										<img
											src={`http://localhost:3001/uploads/${e.imageUrl}`}
											gender={e.gender}
										/>

										<Link style={{ width: '100%' }} to={`/product/${e._id}`} state={e} >
											<div className='txt'>
												<p>
													{e.name && e.name.split('').length > 20
														? e.name.substring(0, 18) + ' ...'
														: e.name}
												</p>
												<p>{t('Price')}: {e.price}</p>
												<div className='info'>
													<button className='addBasket' onClick={() => addToBasket(e._id)}>Add to basket</button>
													<button className='buy addBasket' onClick={() => buy(e._id)}>Buy</button>
												</div>
											</div>
										</Link>
									</Product>
								)
						  })}
				</Products>
			</MainDiv>
		</>
	)
}

