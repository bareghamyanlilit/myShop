import styled from "styled-components";
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
    padding-top: 60px;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
export const BasketItem = styled.div`
	width: 48%;
	background: #fff;
	padding: 10px 20px;
	border-radius: 10px;
	height: max-content;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		font-family: cursive;
		font-size: 28px;
	}
	button {
		font-size: 24px;
		padding: 20px;
		border: none;
		background: #7f0101;
		color: ${globalColor.txtColor};
		border-radius: 10px;
	}
`
export const BasketImg=styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 10px;
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