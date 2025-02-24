import { ProductsPart } from '../../component'
import { Home } from '../../component/home'
import { MainDiv } from './styled'

export const HomePage = ({ setBasketCount }) => {
	return (
		<MainDiv>
			<Home/>
			<ProductsPart setBasketCount={setBasketCount} />
		</MainDiv>
	)
}