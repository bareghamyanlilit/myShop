import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

// Styled Components
export const MenuContainer = styled.div`
	position: relative;
	display: inline-block;
`

export const MenuButton = styled.button`
	background: transparent;
	color: ${globalColor.txtColor};
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	font-size: 24px;

	&:hover {
		background-color: ${globalColor.color};
	}
`

export const MenuItems = styled.ul`
	position: absolute;
	top: 50px;
	right: 0;
	background: ${globalColor.color};
	border: none;
	border-radius: 5px;
	list-style: none;
	padding: 0;
	margin: 0;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: ${props => (props.open ? 'block' : 'none')};
`

export const MenuItem = styled.li`
	padding: 14px 26px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${globalColor.txtColor};
	border-radius: 5px;
	&:hover {
		background: ${globalColor.color};
	}
`

export const Flag = styled.img`
	width: 20px;
	height: 15px;
	border-radius: 3px;
`
