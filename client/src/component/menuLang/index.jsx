import React, { useEffect, useState } from 'react'
import { Flag, MenuButton, MenuContainer, MenuItem, MenuItems } from './styled'
import flagEN from '../../assets/img/FlagEN.png'
import flagRU from '../../assets/img/FlagRU.png'
import flagAM from '../../assets/img/FlagAM.png'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

export const MenuLang = () => {

	const { t } = useTranslation()

	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	const [selectedLanguage, setSelectedLanguage] = useState(
		localStorage.getItem('lang') || 'en'
	)

	const [selectedLanguageSrc, setSelectedLanguageSrc] = useState(
		localStorage.getItem('src') || flagEN
	)
	useEffect(() => {
		if (!localStorage.getItem('lang')) {
			localStorage.setItem('lang', 'en')
		}
	}, [])

	const handleSelectLang = (code, src) => {
		setSelectedLanguage(code)
		setSelectedLanguageSrc(src)
		localStorage.setItem('lang', code)
		localStorage.setItem('src', src)
		i18next.changeLanguage(code)
		setIsOpen(false)
	}

	const languages = [
		{
			code: 'am',
			name: 'Armenian (AM)',
			src: flagAM,
		},
		{
			code: 'ru',
			name: 'Russian (RU)',
			src: flagRU,
		},
		{
			code: 'en',
			name: 'English (EN)',
			src: flagEN,
		},
	]
	return (
		<MenuContainer>
			<MenuButton onClick={toggleMenu}><Flag src={selectedLanguageSrc}></Flag></MenuButton>
			<MenuItems open={isOpen}>
				
				{
					languages.map((e,i)=>{
						return (
							<MenuItem
								key={e + i}
								onClick={() => handleSelectLang(e.code, e.src)}
							>
								<Flag src={e.src} />
								<span style={{'fontSize': '20px'}}>{e.code}</span>
							</MenuItem>
						)
					})
				}
			</MenuItems>
		</MenuContainer>
	)
}
