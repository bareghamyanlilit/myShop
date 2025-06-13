import { Link } from 'react-router-dom'
import styled from "styled-components"
import { globalColor } from '../../assets/colors'

export const Header = styled.header`
	position: fixed;
	z-index: 3;
	top: 0;
	width: 100%;
	height: 80px;
	padding: 0px 80px;
	background: ${globalColor.headerColor};
	display: flex;
	justify-content: space-between;
	border-bottom: 10px solid ${globalColor.color};
	@media (max-width: 480px) {
		padding: 0 20px;
		height: 50px;
	}
`
export const LeftHeader = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	/* padding: 20px 0; */

	@media (max-width: 480px) {
		gap: 20px;
	}
`
export const HeaderLogo = styled.img`
	width: 50px;
	height: 50px;
	@media (max-width: 480px) {
		width: 40px;
		height: 40px;
	}
`
export const ShopName = styled.h1`
	color: #e6e6e1;
	@media (max-width: 480px) {
		font-size: 18px;
	}
`
export const RightHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	@media (max-width: 480px) {
		gap: 10px;
	}
`
export const MenuItems = styled.ul`
	display: flex;
	align-items: center;
	
`
export const MenueLink = styled(Link)`
	color: ${globalColor.txtColor};
	text-decoration: none;
	height: 80px;
	padding: 0 15px;
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	background-color: ${({ $active }) =>
		$active ? `${globalColor.color}` : 'none'};
	&:hover {
		background-color: ${globalColor.color};
	}
	@media (max-width: 700px) {
		display: none;
	}
`
export const IconDiv = styled(Link)`
	color: ${globalColor.txtColor};
	text-decoration: none;
	height: 80px;
	width: 100px;
	font-size: 28px;
	display: none;
	justify-content: center;
	align-items: center;
	@media (max-width: 700px) {
		display: flex;
	}
	@media (max-width: 480px) {
		width: 50px;
		font-size: 24px;
	}
`
export const Translate = styled.div`

`
