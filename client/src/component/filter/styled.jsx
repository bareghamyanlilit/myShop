import styled from "styled-components"
import { globalColor } from '../../assets/colors'

export const FilterDiv = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;
	min-height: 100px;
	padding: 20px 0;
	/* background: #f1f1f1; */
	span {
		cursor: pointer;
		height: max-content;
		padding: 15px 40px;
		font-size: 20px;
		border-radius: 50px;
		border: none;
		background: #2787a3;
		color: ${globalColor.txtColor};
	}
	@media (max-width: 998px) {
		span{
			padding: 10px 30px;
		}
	}
	@media (max-width: 480px) {
		min-height: 60px;

		span {
			padding: 8px 15px;
			font-size: 14px;
			border-radius: 40px;
		}
	}
`