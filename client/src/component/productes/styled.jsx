import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const MainDiv = styled.div`
	/* padding-top: 100px; */
	@media (max-width: 480px) {
		padding-top: 0;
	}
`
export const FilterDiv = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	/* background: #f1f1f1; */
	.filtertesak,
	.filter {
		width: max-content;
		display: flex;
		/* flex-wrap: wrap; */
		align-items: center;
		gap: 10px;
		min-height: 100px;
		padding: 20px 0;

		@media (max-width: 480px) {
			min-height: max-content;
			padding: 10px 5px;
		}
	}
	.filtertesak {
		justify-content: center;
		@media (max-width: 480px) {
			justify-content: flex-start;
		}
	}
	.filter {
		justify-content: center;
		@media (max-width: 480px) {
			justify-content: space-between;
		}
	}

	button {
		cursor: pointer;
		height: max-content;
		padding: 15px 40px;
		font-size: 20px;
		border-radius: 5px;
		border: none;
		background: ${globalColor.headerColor};
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
		/* border-bottom: 1px solid ${globalColor.txtColor}; */
		color: ${globalColor.txtColor};

		@media (max-width: 480px) {
			font-size: 16px;
			padding: 8px;
		}
	}
	.filterPrice {
		width: max-content;
		display: flex;
		gap: 30px;
		input {
			background: ${globalColor.headerColor};
			width: 100px;
			font-size: 20px;
			padding: 8px;
			border-radius: 5px;
			/* background: transparent; */
			border: none;
			/* border-bottom: 1px solid ${globalColor.txtColor}; */
			color: ${globalColor.txtColor};

			@media (max-width: 480px) {
				width: 60px;
				font-size: 16px;
			}
		}

		@media (max-width: 480px) {
			gap: 10px;
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
		bottom: -67px;
		width: 100%;
		padding: 20px 15px;
		transition: 1s;
		p {
			font-family: cursive;
			color: #fff;
			text-shadow: 1px 1px 2px ${globalColor.blue};
			/* text-shadow: 0px 2px 2px #000; */
			padding: 10px 0;
			font-size: 26px;
		}
		.info {
			display: flex;
			align-items: center;
			gap: 20px;
			margin-top: 15px;
			justify-content: space-between;
			.addBasket {
				cursor: pointer;
				padding: 10px 20px;
				border: none;
				color: ${globalColor.txtColor};
				font-size: 22px;
				border-radius: 5px;
				background: ${globalColor.headerColor};
				@media (max-width: 480px) {
					font-size: 16px;
					padding: 5px;
				}
			}
			.buy{
				/* background: #014046; */
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
		height: 230px;

		.txt {
			padding: 10px 5px;
			bottom: -60px;
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
			height: 200px;
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

