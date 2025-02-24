import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const MainDiv = styled.div`
	padding-top: 100px;
`
export const FilterDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
	/* background: #f1f1f1; */
	.filtertesak,
	.filter {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		gap: 10px;
		min-height: 100px;
		padding: 20px 0;
	}

	button {
		cursor: pointer;
		height: max-content;
		padding: 15px 40px;
		font-size: 20px;
		border-radius: 50px;
		border: none;
		background: #2787a3;
		color: ${globalColor.txtColor};
	}
	@media (max-width: 998px) {
		button {
			padding: 10px 30px;
		}
	}
	@media (max-width: 480px) {
		min-height: 60px;

		button {
			padding: 8px 15px;
			font-size: 14px;
			border-radius: 40px;
		}
	}
	.search {
		font-size: 20px;
		padding: 10px 20px;
		border-radius: 5px;
		background: ${globalColor.headerColor};
		border: none;
		border-bottom: 1px solid ${globalColor.txtColor};
		color: ${globalColor.txtColor};
	}
	.filterPrice {
		background: ${globalColor.blue};
		width: max-content;
		display: flex;
		padding: 10px;
		gap: 30px;
		border-radius: 5px;
		input {
			width: 100px;
			font-size: 20px;
			background: transparent;
			border: none;
			border-bottom: 1px solid ${globalColor.txtColor};
			color: ${globalColor.txtColor};
		}
	}
`

export const Products = styled.div`
	padding: 0 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;

	@media (max-width: 768px) {
		gap: 10px;
		padding: 0 10px;
	}

	@media (max-width: 480px) {
		gap: 5px;
		padding: 0 5px;
	}
`

export const Product = styled.div`
	position: relative;
	overflow: hidden;
	width: 350px;
	height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 20px;
	color: ${globalColor.txtColor};
	/* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
	.txt {
		position: absolute;
		backdrop-filter: blur(10px);
		bottom: -75px;
		width: 100%;
		padding: 40px 15px;
		transition: 1s;
		p {
			font-family: cursive;
			color: ${globalColor.txtColor};
			text-shadow: 0px 2px 2px #000;
			padding: 10px 0;
			font-size: 20px;
		}
		.info {
			display: flex;
			align-items: center;
			gap: 20px;
			justify-content: flex-end;
			.like {
				font-size: 22px;
				border: none;
				background: transparent;
			}
			.addBasket {
				cursor: pointer;
				padding: 5px 10px;
				border: none;
				color: ${globalColor.txtColor};
				font-size: 18px;
				border-radius: 5px;
				background: ${globalColor.headerColor};
			}
		}
	}
	img {
		transition: 1s;
		width: 100%;
		height: 450px;
		object-fit: cover;
	}
	&:hover img {
		scale: 1.5;
		/* display: grid; */
	}
	&:hover .txt {
		bottom: 0px;
		/* display: grid; */
	}
	@media (max-width: 1200px) {
		width: 400px;
	}
	@media (max-width: 992px) {
		width: 350px;
	}
	@media (max-width: 768px) {
		width: 45%;
		height: 310px;
		.txt {
			bottom: -42px;
			padding: 10px 15px;
			p {
				font-size: 16px;
			}
		}
		img {
			height: 310px;
		}
	}

	@media (max-width: 480px) {
		width: 49%;
		height: 250px;

		.txt {
			padding: 10px 5px;
			bottom: -30px;
			p {
				font-size: 14px;
				padding: 5px 0;
			}
			h1 {
				font-size: 14px;
			}
			.info {
				gap: 10px;
				.like {
					font-size: 16px;
				}
			}
		}
		img {
			height: 250px;
		}
	}
`

export const Counter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	button {
		width: 25px;
		height: 25px;
		color: ${globalColor.txtColor};
		background: transparent;
		border: 1px solid white;
	}
	h1 {
		font-size: '16px';
	}

	@media (max-width: 480px) {
		gap: 5px;

		button {
			width: 15px;
			height: 15px;
			text-align: center;
		}
	}
`

