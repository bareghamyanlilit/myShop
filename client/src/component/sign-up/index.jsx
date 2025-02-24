import { useState } from "react"
import { Button, Input, Label, MainDiv, SignDiv } from './styled'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { productApi } from '../../api/servicesApi'

export const Sign = () => {
    const [value, setValue] = useState({})
	const { t } = useTranslation()
    const [isRegister, setIsRegister] = useState(false)
    const nav = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(pr => {
            return { ...pr, [name]: value }
        })
    }
    const addUser = async () => {
        try {
            // const req = await fetch('http://localhost:3001/api/auth/register', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(value)
            // })
            // const res = await req.json()
            // console.log(res);
			
            setIsRegister(true)
			await productApi.signUp(value)
        } catch (error) {
            console.log(error);
        }
    }
    const verifyUser = async () => {
        try {
            // const req = await fetch('http://localhost:3001/api/auth/verify', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ code: value.code, email: value.email })
            // })
            // const res = await req.json()
            // console.log(res);
			await productApi.verify({ code: value.code, email: value.email })
            nav('/log-in')
        } catch (error) {
            console.log(error);
        }
    }
    return (
			<>
				<MainDiv>
					<SignDiv>
						<h2>{t('Sign Up')}</h2>
						<div>
							<Label htmlFor='name'>{t('Name')}:</Label>
							<Input
								disabled={isRegister}
								name='name'
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label htmlFor='email'>{t('Email')}:</Label>
							<Input
								disabled={isRegister}
								name='email'
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label htmlFor='password'>{t('Password')}:</Label>
							<Input
								disabled={isRegister}
								name='password'
								onChange={handleChange}
							/>
						</div>
						<Button disabled={isRegister} onClick={addUser}>
							{t('Sign Up')}
						</Button>
						{isRegister && (
							<>
								<div>
									<Label htmlFor='verify'>{t('Verify')}:</Label>
									<Input name='code' onChange={handleChange} />
								</div>
								<Button onClick={verifyUser}>{t('Verify')}</Button>
							</>
						)}
					</SignDiv>
				</MainDiv>
			</>
		)
}