import styled from 'styled-components'
import img1 from '../../assets/img/about.jpg'
import { globalColor } from '../../assets/colors'

export const PageContainer = styled.div`
	padding: 60px 0;
	background: #e1f3ff;

	@media (max-width: 480px) {
		padding-top: 50px;
	}
`

export const HeroSection = styled.section`
	background: url(${img1}) no-repeat center center/cover;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${globalColor.blue};
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
	@media (max-width: 992px) {
		height: 300px;
	}
`

export const HeroTitle = styled.h1`
	color: ${globalColor.txtColor};
	font-size: 3rem;
	font-family: monospace;
	text-shadow: 0px 1px 1px #000;
	@media (max-width: 480px) {
		font-size: 2rem;
	}
`

export const Container = styled.div`
	width: 80%;
	margin: auto;
	overflow: hidden;

	@media (max-width: 480px) {
		width: 92%;
	}
`

export const Section = styled.section`
	padding: 2rem 0;
	p {
		margin: 20px 0;
		color: ${globalColor.blue};
	}
`

export const AboutText = styled.div`
	background: #f4f4f4;
	padding: 1.5rem;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const AboutImages = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`

export const AboutImage = styled.img`
	width: 100%;
	max-width: 300px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const TeamSection = styled.section`
	text-align: center;
`

export const TeamTitle = styled.h2`
	margin-bottom: 1rem;
`

export const TeamMembers = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
`

export const TeamMember = styled.div`
	background: #fff;
	padding: 1rem;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	text-align: center;
	max-width: 400px;
	height: 300px;
	img {
		width: 100%;
		height: 200px;
		border-radius: 50%;
		object-fit: contain;
	}
	p {
		color: ${globalColor.blue};
	}
	h3{
		padding: 10px 0
	}
`


