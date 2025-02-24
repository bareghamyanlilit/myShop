import { useLocation, useNavigate } from 'react-router-dom'
import { Images, Right, Img, MainDiv, Product, SizeItem, Sizes, TxtInfo, TxtItem, Button } from './styled'
import { IoChevronBackCircle } from 'react-icons/io5'
import { useState } from 'react'

export const ProductPage=()=>{
	const location = useLocation()
    const nav = useNavigate()
	const [index, setIndex] = useState('main')
	// console.log(location?.state?.firmaImg)
	const loc = location?.state
	console.log(loc);
	const prev=()=>{
		nav('/')
	}
	
	const addCard=()=>{
		nav(`/card`)
	}
	// console.log(location?.state);
	return (
		<>
			<MainDiv>
				<Product>
					<IoChevronBackCircle className='prev' onClick={prev} />
					<div className='left'>
						<div className='name'>
							<div className='firma'>
								<img src={loc?.firmaImg} />
								<span>{loc?.firma}</span>
							</div>
							<h1>{loc?.name}</h1>
						</div>
						<Img
							src={
								index == 'main'
									? loc?.src
									: loc?.info?.imgArr[index]
							}
						/>
					</div>
					<Right>
						<div className='size'>
							<h2>SIZE</h2>
							<Sizes>
								{loc?.info?.sizeArr?.map((e, i) => (
									<SizeItem key={e + i}>{e}</SizeItem>
								))}
							</Sizes>
						</div>

						{/* <TxtInfo>
							<p>
								<span>Gender.............</span>
								{loc?.info?.gender}
							</p>
						</TxtInfo> */}

						<TxtItem>
							<h3>{loc?.price} $</h3>
						</TxtItem>
						<Button onClick={addCard} state={loc}>
							Add Card
						</Button>

						<Images>
							{loc?.info?.imgArr.map((e, i) => (
								<img key={i} src={e} onClick={() => setIndex(i)} />
							))}
						</Images>
					</Right>
				</Product>
			</MainDiv>
		</>
	)
}


// import { useEffect, useState } from 'react'
// import {productApi} from '../../api/servicesApi'
// export const ProductPage = () => {
// 	const [product, setProduct] = useState([])
// 	useEffect(() => {
// 		getData()
// 	}, [])
// 	const getData = async () => {
// 		const response = await productApi.getProduct()
// 		setProduct(response.data)
// 	}
// 	const addToBasket = async id => {
// 		const token = localStorage.getItem('token')
// 		if (!token) {
// 			alert('You must be logged in')
// 			return
// 		}
// 		console.log(token, id)
// 		const response = await productApi.addToBasket(token, id)
// 		console.log(response.data)
// 	}
// 	return (
// 		<>
// 			{product.length > 0 &&
// 				product.map(e => {
// 					return (
// 						<div key={e._id}>
// 							{e.brand}
// 							<button onClick={() => addToBasket(e._id)}>add to basket</button>
// 						</div>
// 					)
// 				})}
// 		</>
// 	)
// }

