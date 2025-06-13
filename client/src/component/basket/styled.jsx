import styled from "styled-components"
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
padding-top: 100px;
justify-items: center;

`
export const DeleteBtn = styled.button`
	border: none;
	padding: 15px 45px;
	background: #780101;
	color: #fff;
	font-size: 16px;
`
export const Products = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

`
export const Product = styled.div`
	width: 100vw;
	display: flex;
	padding: 10px;
	justify-content: space-between;
	align-items: center;
	img {
		width: 350px;
		height: 200px;
		object-fit: cover;

		@media (max-width: 480px) {
			width: 150px;
			height: 110px;
		}
	}
	p {
		font-size: 18px;
		color: ${globalColor.blue};
		@media (max-width: 480px) {
			font-size: 14px;
		}
	}
	.buttons {
		button {
			padding: 15px;
			border: none;
			background: #8a0101;
			color: #fff;
			border-radius: 5px;
			font-size: 14px;
			@media (max-width: 480px) {
				padding: 8px;
				font-size: 12px;
			}
		}
	}
`