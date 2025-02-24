import { useState } from "react"
import { Button, Input, Label, LoginDiv, MainDiv } from './styled'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { productApi } from '../../api/servicesApi'
export const Log = () => {
	const { t } = useTranslation()
    const [value, setValue] = useState({})
    const nav = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(pr => {
            return { ...pr, [name]: value }
        })
    }
    const loginUser = async () => {
        try {
            // const req = await fetch('http://localhost:3001/api/auth/login', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(value)
            // })
            // const res = await req.json()
            // console.log(res);
			const res = await productApi.loginUser(value)
            console.log(res);
            localStorage.setItem('token', res.data.token)
            nav('/profile')
        } catch (error) {
            console.log(error);
        }
    }
    return (
			<>
				<MainDiv>
					<LoginDiv>
						<h2>{t('Log In')}</h2>
						<div>
							<Label htmlFor='email'>{t('Email')}:</Label>
							<Input name='email' onChange={handleChange} />
						</div>
						<div>
							<Label htmlFor='password'>{t('Password')}:</Label>
							<Input name='password' onChange={handleChange} />
						</div>
						<Button onClick={loginUser}>{t('Log In')}</Button>
					</LoginDiv>
				</MainDiv>
			</>
		)
}