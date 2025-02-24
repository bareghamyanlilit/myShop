import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage, LogIn, ContactForm, AboutPage,MyBasketPage,ProductPage, Account } from './container'
import { GlobalStyles } from './styled'
import i18n from 'i18next'
import translationEN from './languages/en/translation.json'
import translationRU from './languages/ru/translation.json'
import translationAM from './languages/am/translation.json'
import { initReactI18next } from 'react-i18next'
import { Basket, MyFooter, MyHeader, Profile } from './component'
import { SignUp } from './container/signUp'
import { AddCard } from './component/card'
import {  ProductsPart } from './component/productes'

export const MyProject=()=>{
	i18n.use(initReactI18next).init({
		resources: {
			en: {
				translation: translationEN,
			},
			ru: {
				translation: translationRU,
			},
			am: {
				translation: translationAM,
			},
		},
		lng: localStorage.getItem('lang') || 'en',
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
	})
    const [basketCount, setBasketCount] = useState(
			JSON.parse(localStorage.getItem('basket'))?.length || 0
		)
		console.log(basketCount)

		useEffect(() => {
			if (!localStorage.getItem('basket')) {
				localStorage.setItem('basket', JSON.stringify([]))
			}
		}, [])
	return (
		<Router>
			<GlobalStyles />
			<MyHeader basketCount={basketCount} />
			<Routes>
				<Route path='/' element={<HomePage  setBasketCount={setBasketCount}/>} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/account' element={<Account />} />
				<Route path='/contact' element={<ContactForm />} />
				<Route path='/shop' element={<MyBasketPage  setBasketCount={setBasketCount}/>} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/card" element={<AddCard />} />
                <Route path="/products" element={<ProductsPart />} />
                <Route path="/basket" element={<Basket />} />
			</Routes>
			<MyFooter />
		</Router>
	)
}
