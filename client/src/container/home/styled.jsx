import styled from "styled-components"
import { globalColor } from "../../assets/colors"

export const MainDiv = styled.div`
	padding: 0  0 60px;
	min-height: 100vh;
	background: ${globalColor.color};
	@media (max-width: 480px) {
		padding-top: 50px;
	}
`