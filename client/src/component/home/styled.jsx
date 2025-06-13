import styled, { keyframes } from 'styled-components'
import { globalColor } from '../../assets/colors'


export const MainDiv = styled.div`
	position: relative;
	padding-top: 100px;
	height: 90vh;
	background-color: ${globalColor.headerColor};
	display: flex;
	justify-content: start;
	align-items: center;
	overflow: hidden;
	&::after {
			content: '';
			position: absolute;
			width: 120%;
			height: 0.5px;
			z-index: 1;
			/* left: -10%; */
			background: black;
			bottom: 60px;
			@media (max-width: 480px) {
				display: none;
			}
	}
	&::before {
		content: '>';
		position: absolute;
		rotate: 90deg;
		left: 50%;
		bottom: 0;
		font-size: 36px;
		@media (max-width: 480px) {
			display: none;
		}
	}
	@media (max-width: 768px) {
		height: 80vh;
	}

	@media (max-width: 568px) {
		height: 60vh;
	}
	@media (max-width: 480px) {
		height: 45vh;
	}
	.title {
		width: max-content;
		font-size: 12rem;
		color: #fff;
		/* text-shadow: 0 0 10px ${globalColor.blue}; */
		@media (max-width: 1200px) {
			font-size: 10rem;
		}

		@media (max-width: 992px) {
			font-size: 8rem;
		}

		@media (max-width: 768px) {
			font-size: 6rem;
		}

		@media (max-width: 568px) {
			font-size: 5rem;
		}
		@media (max-width: 480px) {
			display: none;
		}
	}

	.image {
		margin: 0 50px;
		position: relative;
		width: 350px;
		/* height: 0px; */
		align-content: center;
		/* border-radius: 200px; */
		/* background: ${globalColor.headerColor}; */
		/* background: url('../../assets/img/o.png') no-repeat center center; */
		
		video {
			width: 100%;
			height: 100%;
			border-radius: 200px;
			object-fit: cover;
			@media (max-width: 480px) {
				border-radius: 0;
			}
		}

		@media (max-width: 992px) {
			height: 200px;
			&::after {
				bottom: -40px;
			}

			&::before {
				bottom: -80px;
				font-size: 28px;
			}
		}
		@media (max-width: 568px) {
			height: 150px;
			&::after {
				bottom: -20px;
			}

			&::before {
				bottom: -60px;
				font-size: 24px;
			}
		}
		/* @media (max-width: 480px) {
			.bPrKbF .image::before {
				bottom: -50px;
				font-size: 20px;
			}
		} */
		@media (max-width: 480px) {
			height: 100%;
		}
	}
`
