import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const MainDiv = styled.div`
    padding-top: 60px;
`
export const ProfileDiv = styled.div`
	padding: 40px 0;
	width: 90%;
	box-shadow: 5px 5px 30px ${globalColor.blue};
	background: ${globalColor.headerColor};
	margin: 20px auto 50px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	.info{
		display: flex;
		justify-content: space-between;
		width: 80%;
		color: ${globalColor.txtColor};
		padding: 40px;
		h2{
			border-bottom: 1px solid ${globalColor.txtColor};
		}
	}
	button{
		cursor: pointer;
		padding: 15px 30px;
		background: #590101;
		color: ${globalColor.txtColor};
		width: max-content;
	}
`
export const User = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px 40px;
	gap: 50px;
	background: ${globalColor.blue};
	div{
		border-radius: 50%;
		width: 100px;
		height: 100px;
		background: ${globalColor.txtColor};
		font-size: 30px;
		font-family: monospace;
		color: ${globalColor.blue};
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h2{
		font-size: 26px;
		color: ${globalColor.txtColor};
	}
`