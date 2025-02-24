import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const MainDiv = styled.div`
`
export const SignDiv = styled.div`
	width: max-content;
	padding: 40px;
	border-radius: 5px;
	background: ${globalColor.blue};
	display: flex;
	flex-direction: column;
	gap: 10px;
	div {
		width: 400px;
	}
	h2 {
		color: ${globalColor.txtColor};
		text-align: center;
		margin-bottom: 30px;
	}
`

export const Label = styled.label`
	font-size: 1rem;
	color: ${globalColor.txtColor};
`

export const Input = styled.input`
	background: transparent;
	width: 100%;
	padding: 10px 15px;
	font-size: 1rem;
	border: none;
	transition: border-color 0.3s;
	border-bottom: 1px solid #fff;
	color: ${globalColor.txtColor};
	&:focus {
		outline: none;
	}
`

export const Button = styled.button`
	margin-top: 20px;
	padding: 10px 20px;
	font-size: 1rem;
	font-weight: bold;
	color: ${globalColor.txtColor};
	background: #153100;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #398301;
	}
`


