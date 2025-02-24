import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDiv, ProfileDiv, User } from './styled'
import { useTranslation } from 'react-i18next'
export const Profile = () => {
	const { t } = useTranslation()
	const [value, setValue] = useState({})
	const nav = useNavigate()
	useEffect(() => {
		const getData = async () => {
			const token = localStorage.getItem('token')
			if (!token) {
				nav('/log-in')
			}
			try {
				const req = await fetch('http://localhost:3001/api/auth/profile', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				const res = await req.json()
				if (req.status == 400) {
					localStorage.removeItem('token')
					nav('/log-in')
				}
				setValue(res)
			} catch (error) {
				console.log(error)
				localStorage.removeItem('token')
				nav('/log-in')
			}
		}
		getData()
	}, [])

	return (
		<>
			<MainDiv>
				<ProfileDiv>
					<User>
						{/* <div>{value.name[0]}</div> */}
						<h2>{value.name}</h2>
					</User>
					<div className='info'>
						<h2>
							{t('Name')}:{value.name}
						</h2>
						<h2>
							{t('Email')}:{value.email}
						</h2>
					</div>

					<button
						onClick={() => {
							localStorage.removeItem('token')
							nav('/sign-up')
						}}
					>
						Log out
					</button>
				</ProfileDiv>
			</MainDiv>
		</>
	)
}
