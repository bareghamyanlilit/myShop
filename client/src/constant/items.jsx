import adidas from '../assets/img/products/adidas.png'
import img1 from '../assets/img/products/product1.jpg'
import img2 from '../assets/img/products/product2.jpg'
import img3 from '../assets/img/products/product3.jpg'
import img4 from '../assets/img/products/product4.jpg'
import img5 from '../assets/img/products/product5.jpg'
import img6 from '../assets/img/products/product6.jpg'
import img7 from '../assets/img/products/product7.jpg'
import img8 from '../assets/img/products/product8.jpg'
import img9 from '../assets/img/products/product9.jpg'
// import img10 from '../assets/img/products/product10.jpg'
// import img11 from '../assets/img/products/product11.jpg'
// import img12 from '../assets/img/products/product12.jpg'
// import img13 from '../assets/img/products/product13.jpg'
// import img14 from '../assets/img/products/product14.jpg'
// import img15 from '../assets/img/products/product15.jpg'
// import img16 from '../assets/img/products/product16.jpg'
console.log(adidas);
export const ProductsArr = [
	{
		id:1,
		firmaImg:adidas,
		firma:'Adidas',
		name: "Women's classic coat",
		src: img1,
		price: 15000,
		info: {
			imgArr: [
				img1,
				img9,
				img7,
				img3
			],
			sizeArr:["S","M","L","XL","XXL","XXXL"],
			gender: 'male',
		},
	},
	{ id: 6,name: "Man's' classic coat", src: img6, price: 20000, gender: 'man' },
	{ id: 7,name: "Women's classic coat", src: img7, price: 25000, gender: 'women' },
	{ id: 8,name: "Man's' classic coat", src: img8, price: 35000, gender: 'man' },
	{ id: 2,name: "Women's classic coat", src: img2, price: 20000, gender: 'women' },
	{ id: 3,name: "Man's classic coat", src: img3, price: 25000, gender: 'man' },
	{ id: 4,name: "Man's' classic coat", src: img4, price: 35000, gender: 'man' },
	{
		id:1,
		name: "Women's classic coat",
		src: img1,
		price: 150,
		info: {
			imgArr: [
				'https://basket-02.wbbasket.ru/vol172/part17226/17226114/images/tm/1.webp',
				'https://basket-05.wbbasket.ru/vol747/part74781/74781220/images/tm/1.webp',
				'https://basket-01.wbbasket.ru/vol133/part13396/13396223/images/tm/1.webp',
				'https://basket-15.wbbasket.ru/vol2322/part232258/232258060/images/tm/1.webp',
			],
			color: ['black', 'gray', 'white'],
			sizeArr:["S","M","L","XL","XXL","XXXL"],
			gender: 'male',
		},
	},
	{ id: 2,name: "Women's classic coat", src: img2, price: 20000, gender: 'women' },
	{ id: 3,name: "Man's classic coat", src: img3, price: 25000, gender: 'man' },
	{ id: 4,name: "Man's' classic coat", src: img4, price: 35000, gender: 'man' },
	{ id: 5,name: "Women's classic coat",src: img5, price: 15000, gender: 'women' },
	{ id: 6,name: "Man's' classic coat", src: img6, price: 20000, gender: 'man' },
	{ id: 7,name: "Women's classic coat", src: img7, price: 25000, gender: 'women' },
	{ id: 8,name: "Man's' classic coat", src: img8, price: 35000, gender: 'man' },
	// { src: img9, price: 15000 },
	// { src: img10, price: 20000 },
	// { src: img11, price: 25000 },
	// { src: img12, price: 35000 },
	// { src: img13, price: 15000 },
	// { src: img14, price: 20000 },
	// { src: img15, price: 25000 },
	// { src: img16, price: 35000 },
]
