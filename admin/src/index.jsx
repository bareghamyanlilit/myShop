import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddProduct from './component/addProduct'
import { GlobalStyles } from './styled'
import { LoginPage } from './component/login'
import { adminProfile } from './api/api'

export const Admin = () => {
	useEffect(()=>{
		async function getData(){
			try {
				const token=localStorage.getItem('adminToken')
				if (!token) return
				const res=await adminProfile(token)
				// console.log(res);
			} catch (error) {
				localStorage.removeItem('adminToken')
				window.location.replace('/login')
				console.log(error);
			}
		}
		getData()
	},[])
	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route path='/' element={<AddProduct />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</Router>
	)
}
