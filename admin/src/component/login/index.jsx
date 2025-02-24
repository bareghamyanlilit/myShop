import { useState } from 'react'
import { adminLogin } from '../../api/api'

import { useNavigate } from 'react-router-dom'
export const LoginPage=()=>{
	const [value,setValue]=useState({})
	const nav=useNavigate()
	const handleChange=(e)=>{
		const {name,value}=e.target
		setValue(pr =>{
			return{...pr,[name]:value}
		})
	}
	const login=async()=>{
		try {
			const res=await adminLogin(value)
			console.log(res.data);
			
			if (res.status==200) {
				localStorage.setItem('adminToken',res.data.token)
				nav('/')
			}
		} catch (error) {
			console.log(error);
		}
	}
	return(
		<>
			<h1>Login</h1>
			<input name='login'  onChange={handleChange}/>
			<input name='password'  onChange={handleChange}/>
			<button onClick={login}>Login</button>
		</>
	)
}