import styled from "styled-components"
import { globalColor } from '../../assets/colors'

export const FooterContainer = styled.footer`
	background: ${globalColor.headerColor};
	color: ${globalColor.txtColor};
	padding: 40px 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`
export const FooterSections = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: start;
	gap: 20px;
	@media (max-width: 480px) {
		justify-content: center;
	}
`

export const FooterSection = styled.div`
	flex: 1;
	min-width: 150px;

	@media (max-width: 768px) {
		flex: none;
		margin-bottom: 20px;
	}
`

export const FooterTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 20px;
	@media (max-width: 480px) {
		font-size: 20px;
	}
`

export const FooterLinks = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`

export const FooterLink = styled.a`
	display: block;
	color: ${globalColor.txtColor};
	text-decoration: none;
	margin-bottom: 10px;
	width: max-content;
	font-size: 1rem;
	transition: color 0.3s;

	&:hover {
		color: #e63946;
	}
`

export const SocialIcons = styled.div`
	display: flex;
	gap: 10px;

	@media (max-width: 480px) {
		justify-content: center;
	}
`

export const SocialIcon = styled.a`
	color: ${globalColor.txtColor};
	font-size: 1.5rem;
	transition: color 0.3s;

	&:hover {
		color: #e63946;
	}

	@media (max-width: 480px) {
		font-size: 18px;
	}
`

export const ContactInfo = styled.div`
	font-size: 1rem;

	p {
		margin: 5px 0;
	}
`

export const Copyright = styled.div`
	text-align: center;
	margin-top: 20px;
	font-size: 18px;
	color: #aaaaaa;

	@media (max-width: 768px) {
		margin-top: 40px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
	}
`
