import styled, { keyframes } from 'styled-components'
import { globalColor } from '../../assets/colors'
const open = keyframes`
  0% {
	width:10px ;
  }
  100% {
	width: 800px;
  }
`

export const MainDiv = styled.div`
	height: 100vh;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	@media (max-width: 768px) {
		height: 80vh;
	}

	@media (max-width: 568px) {
		height: 60vh;
	}
	@media (max-width: 480px) {
		height: 45vh;
	}
	h1 {
		font-size: 20rem;
		/* text-shadow: 0 0 10px ${globalColor.blue}; */
		@media (max-width: 1200px) {
			font-size: 14rem;
		}

		@media (max-width: 992px) {
			font-size: 10rem;
		}

		@media (max-width: 768px) {
			font-size: 8rem;
		}

		@media (max-width: 568px) {
			font-size: 6rem;
		}
	}

	.image {
		position: relative;
		width: 800px;
		height: 300px;
		border-radius: 200px;
		background: #f2f2f2;
		animation: ${open} 4s ease;
		&::after {
			content: '';
			position: absolute;
			width: 120%;
			height: 0.5px;
			z-index: 1;
			left: -10%;
			background: black;
			bottom: -60px;
		}
		&::before {
			content: '>';
			position: absolute;
			rotate: 90deg;
			left: 50%;
			bottom: -120px;
			font-size: 36px;
		}
		video {
			width: 100%;
			height: 100%;
			border-radius: 200px;
			object-fit: cover;
		}

		@media (max-width: 992px) {
			height: 200px;
		}

		@media (max-width: 992px) {
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
		@media (max-width: 480px) {
			.bPrKbF .image::before {
				bottom: -50px;
				font-size: 20px;
			}
		}
	}
`
