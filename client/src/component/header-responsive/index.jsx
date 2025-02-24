import { Link } from 'react-router-dom'
import { MainDiv } from './styled'
import { useTranslation } from 'react-i18next'

export const HeaderResponsive = ({ $active, items, setOpenMenu }) => {
	const { t } = useTranslation()

	return (
		<MainDiv $active={$active}>
			{items.map(e => {
				return (
					<Link to={e.path} key={e.path} onClick={()=>{setOpenMenu(false)}}>
						{t(e.name)}
					</Link>
				)
			})}
		</MainDiv>
	)
}