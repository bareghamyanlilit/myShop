import styled from "styled-components";
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
	padding-top: 60px;
	background-color: #fff;
`

export const Product = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: calc(100vh - 60px);
	.prev{
		cursor: pointer;
		position: absolute;
		font-size: 62px;
		color: ${globalColor.blue};
		top: 2%;
		left: 2%;
	}
	.left {
		width: 65vw;
		/* height: 100%; */
		background: #eeffc5;
		display: flex;
		justify-content: end;
		align-items: center;
		.name {
			width: 400px;
			min-height: 400px;
			/* background: #f1f1f1; */
			.firma {
				display: flex;
				align-items: center;
				color: ${globalColor.blue};
				img {
					width: 50px;
					height: 50px;
					object-fit: contain;
				}
				span {
					font-size: 28px;
				}
			}
			h1 {
				color: ${globalColor.blue};
				font-size: calc(36px + 1.5vw);
			}
		}
	}
`
export const Img = styled.img`
	width: 30vw;
	height: 100%;
    object-fit: cover;
`
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 35px ;
	/* gap: 30px; */
	width: 35vw;
	/* height: 100%; */
	background: #dadaff;
	font-size: 18px;
	justify-content: space-evenly;
	.size{
		display: flex;
		flex-direction: column;
		gap: 20px;
		h2{
			font-size: 30px;
			color: ${globalColor.blue};
			margin-left: 10px;
		}
	}
`
export const TxtItem = styled.div`
	h3{
		color: ${globalColor.color};
		font-size: 32px;
		margin: 10px 0;
	}
`
export const Images = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	img {
		width: 80px;
		height: 120px;
		border-radius: 5px;
	}
`

export const TxtInfo = styled.div`
	display: grid;
	gap: 15px;
	font-size: 24px;
`
export const Sizes = styled.div`
	width: 30vw;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
`
export const SizeItem = styled.span`
	padding: 20px 30px;
	border: 1px solid ${globalColor.blue};
	border-radius: 5px;
	cursor: pointer;
	color: ${globalColor.blue};
`

export const Button = styled.button`
	margin-top: 20px;
	padding: 15px 20px;
	font-size: 20px;
	font-weight: bold;
	color: ${globalColor.txtColor};
	background: ${globalColor.blue};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #015a83;
	}
`