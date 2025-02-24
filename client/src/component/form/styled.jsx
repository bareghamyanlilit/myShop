import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	background: ${globalColor.color};
	padding: 30px 50px;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	.title {
		color: ${globalColor.txtColor};
		font-family: monospace;
		font-size: 28px;
		text-align: center;
	}
	@media (max-width: 480px) {
		border-radius: 0;
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

export const Error = styled.p`
	font-size: 0.875rem;
	color: #ff0000;
	margin-top: 5px;
`

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
export const SwitchForm = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;

	p {
		font-size: 0.875rem;
		color: ${globalColor.txtColor};

		button {
			font-size: 0.875rem;
			color: #abff6c;
			background: none;
			border: none;
			cursor: pointer;
			text-decoration: underline;
			transition: color 0.3s;

			&:hover {
				color: ${globalColor.txtColor};
			}
		}
	}
`
