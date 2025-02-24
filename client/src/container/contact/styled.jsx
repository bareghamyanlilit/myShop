import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
	padding-top: 60px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	@media (max-width: 480px) {
		padding-top: 50px;
	}
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	width: 100%;
	height: 100vh;

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}
`

export const ContactContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 40px;
	background: #000;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 40%;
	min-width: 300px;

	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 480px) {
		padding: 40px 20px;
	}
`

export const MapContainer = styled.div`
	flex: 1;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const SectionTitle = styled.h2`
	font-size: 1.8rem;
	color: ${globalColor.txtColor};
	margin-bottom: 20px;
	text-align: center;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const Label = styled.label`
	font-size: 1rem;
	color: ${globalColor.txtColor};
`

export const Input = styled.input`
	background: transparent;
	width: 100%;
	padding: 10px;
	font-size: 1rem;
	border: none;
	border-bottom: .5px solid #ddd;
	color: ${globalColor.txtColor};
	transition: border-color 0.3s;

	&:focus {
		border-color: ${globalColor.headerColor};
		outline: none;
	}
	@media (max-width: 480px) {
		font-size: 14px;
	}
`

export const TextArea = styled.textarea`
	background: transparent;
	width: 100%;
	padding: 10px;
	font-size: 1rem;
	border: .5px solid #ddd;
	border-radius: 5px;
	transition: border-color 0.3s;
	color: ${globalColor.txtColor};

	&:focus {
		border-color: ${globalColor.headerColor};
		outline: none;
	}
`

export const Button = styled.button`
	padding: 12px 20px;
	font-size: 1rem;
	color: ${globalColor.txtColor};
	background-color: ${globalColor.color};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${globalColor.headerColor};
	}
`

export const MapIframe = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
`
