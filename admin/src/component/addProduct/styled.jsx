import styled from "styled-components"
import { globalColor } from '../../../../client/src/assets/colors'
export const AdminDiv = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`
export const Left = styled.div`
	width: 20vw;
	height: 100%;
	background: #444444;
`

export const MenuItems = styled.ul`
	display: flex;
	align-items: center;
`
export const MenueLink = styled.a`
	color: ${globalColor.txtColor};
	text-decoration: none;
	height: 60px;
	padding: 0 15px;
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	@media (max-width: 700px) {
		display: none;
	}
`

export const Right = styled.div`
	width: 80vw;
	height: 100%;
	background: #a3a3ff;
	display: flex;
`
export const Form = styled.form`
	width: max-content;
	padding: 50px;
	/* background: ${globalColor.blue}; */
	select {
		width: 300px;
		font-size: 18px;
		padding: 5px 0;
	}
`
export const Label = styled.div`
	color: ${globalColor.blue};
	margin: 5px 0 2px;
	font-size: 20px;
	
`
export const Input = styled.input`
	width: 300px;
	/* height: 20px; */
	font-size: 18px;
	padding: 5px 0;
`

export const Button = styled.button`
	margin-top: 20px;
	padding: 10px 30px;
	font-size: 1rem;
	font-weight: bold;
	color: ${globalColor.txtColor};
	background: #449606;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #398301;
	}
`

export const Products = styled.div`
	width: 100%;
	height: 100%;
	overflow: scroll;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`
export const Product = styled.div`
	padding: 10px;
	p {
		font-size: 18px;
	}
	img {
		width: 200px;
		height: 200px;
		object-fit: contain;
	}
`
