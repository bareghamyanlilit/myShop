import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	background: #006980;
	z-index: 2;
	opacity: ${({ $active }) => ($active ? 1 : 0)};
	top: ${({ $active }) => ($active ? 0 : '-100vh')};
	transition: 1s;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
	@media (min-width: 700px) {
		display: none;
	}
	a {
		color: ${globalColor.txtColor};
		font-size: 24px;
	}
`