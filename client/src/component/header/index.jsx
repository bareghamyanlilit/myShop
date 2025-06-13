import { Header, HeaderLogo, IconDiv, LeftHeader, MenuItems, MenueLink, RightHeader, ShopName } from './styled'
import logo from '../../assets//img/o.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
import { MenuLang } from '../menuLang'
import { HeaderResponsive } from '../header-responsive'

export const MyHeader=({basketCount})=>{
	const {t} = useTranslation()
	const loc =useLocation();
	const [openMenu,setOpenMenu]=useState(false)
	const arr = [
		{ name: 'Home', path: '/', active: loc.pathname === '/' ? true : false },
		{ name: 'Contact', path: '/contact', active: loc.pathname === '/contact' ? true : false  },
		{ name: 'About', path: '/about', active: loc.pathname === '/about' ? true : false  },
		{ name: 'Shop', path: '/shop', active: loc.pathname === '/shop' ? true : false  ,basket:true},
		{ name: 'Basket', path: '/basket', active: loc.pathname === '/basket' ? true : false },
		// { name: 'Account', path: '/account', active: loc.pathname === '/account' ? true : false  },
		{ name: 'Sign Up', path: '/sign-up', active: loc.pathname === '/sign-up' ? true : false , show: localStorage.getItem('token') ? false : true },
		{ name: 'Log In', path: '/log-in', active: loc.pathname === '/log-in' ? true : false , show: localStorage.getItem('token') ? false : true },
		{ name: 'Profile', path: '/profile', active: loc.pathname === '/profile' ? true : false, show: localStorage.getItem('token') ? true : false  },
	]
	const [items, setItems] = useState(arr)
	useEffect(() => {
		setItems(arr)
	}, [loc])

	return (
		<>
			<Header>
				<LeftHeader>
					<HeaderLogo src={logo} />
					<ShopName>LOOK OPTIC</ShopName>
				</LeftHeader>

				<RightHeader>
					<MenuItems>
						{items.map((e, i) => (
							e.show !== false &&
								<MenueLink $active={e.active} to={e.path} key={e.path}onClick={() => changeActive(i)}>
									{t(e.name)}
									{e.basket && basketCount !== 0 && basketCount}
								</MenueLink>
						))}
						<IconDiv onClick={() => setOpenMenu(e => !e)}>
							<IoMenuSharp />
						</IconDiv>
					</MenuItems>
					<MenuLang />
				</RightHeader>
			</Header>
			<HeaderResponsive
				$active={openMenu}
				items={items}
				setOpenMenu={setOpenMenu}
			/>
		</>
	)
}