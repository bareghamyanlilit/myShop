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