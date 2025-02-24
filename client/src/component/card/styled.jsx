import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 100px;
	height: 90vh;
	background-color: #f0f0f0;
	font-family: Arial, sans-serif;
`

export const CardContainer = styled.div`
	perspective: 1000px;
	width: 450px;
	height: 300px;
	position: relative;
	margin-bottom: 20px;
	transition: transform 0.6s;
	transform-style: preserve-3d;

	&.flipped {
		transform: rotateY(180deg);
	}
`

export const Card = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	position: absolute;
	backface-visibility: hidden;
	padding: 40px;
	box-sizing: border-box;
	background-color: #fff;
`

export const CardFront = styled(Card)`
	background: linear-gradient(135deg, #78889b, #7a8c9d);
	color: white;
`

export const CardBack = styled(Card)`
	background: linear-gradient(135deg, #73879b, #3f4246);
	color: white;
	transform: rotateY(180deg);
`

export const CardLogo = styled.div`
	height: 60px;
	font-size: 24px;
	font-weight: bold;
	/* margin-bottom: 20px; */
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	/* gap: 10px; */
`

export const CardTypeLogo = styled.img`
	width: 60px;
	height: 60px;
	object-fit: contain;
`

export const CardChip = styled.div`
	width: 60px;
	height: 40px;
	background-color: #ffd700;
	border-radius: 5px;
	margin-bottom: 20px;
`

export const CardNumber = styled.div`
	font-size: 28px;
	letter-spacing: 2px;
	margin-bottom: 20px;
`

export const CardHolder = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`

export const CardExpiry = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`

export const Label = styled.span`
	font-size: 18px;
`

export const Name = styled.span`
	font-weight: bold;
`

export const Date = styled.span`
	font-weight: bold;
`

export const MagneticStrip = styled.div`
	width: 100%;
	height: 50px;
	background-color: #000;
	margin-top: 20px;
`

export const Signature = styled.div`
	margin-top: 20px;
	font-size: 18px;
`

export const SignatureLine = styled.div`
	width: 100%;
	height: 30px;
	background-color: #ccc;
	margin-top: 5px;
`

export const Cvv = styled.div`
	margin-top: 40px;
	text-align: right;
`

export const Number = styled.span`
	font-weight: bold;
	font-size: 28px;
`

export const InputForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	gap: 10px;
`

export const Input = styled.input`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 18px;
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