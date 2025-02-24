import styled, { keyframes } from 'styled-components'
import { globalColor } from '../../assets/colors'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
`
export const MainDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 60px;
	min-height: 100vh;
	background: radial-gradient(
		circle,
		${globalColor.txtColor},
		${globalColor.blue}
	);
	background-size: 200% 200%;
	animation: ${gradientAnimation} 6s infinite;
`
