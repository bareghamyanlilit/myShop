import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'email-validator'
import {
	FormContainer,
	Input,
	Label,
	Button,
	Error,
	CheckboxContainer,
	SwitchForm,
} from './styled'
import { useTranslation } from 'react-i18next'

export const MyForm = () => {
	const { t } = useTranslation()
	const [isSignUp, setIsSignUp] = useState(true) // Toggle between Sign-Up and Log-In
	const [users,setUsers]=useState([])
	const {
		register,
		handleSubmit,
		resetField,
		watch,
		formState: { errors },
	} = useForm()
	// console.log(users);

	const onSubmitSignUp = async(data) => {
		// console.log(isSignUp ? t('signData') : t('logData'), data)
		let count =users.filter(e => e.email == data.email)
		if (count.length > 0) {
			alert('tenc mard ka')
			return
		}
		data.basket = []
		const result = users.slice()
		result.push(data)
		setUsers(result)
		localStorage.setItem('users', JSON.stringify(result))
		
		resetField('name')
		resetField('email')
		resetField('password')
		resetField('confirmPassword')
	}
	const onSubmitLogIn = async data => {
		// console.log(isSignUp ? t('signData') : t('logData'), data)
		let count=users.filter(e => (e.email == data.email && e.password == data.password))
		if (count.length > 0) {
			alert('hajoxvec mutq gorcel')
			console.log(count);
			data=count[0]
			return
		}
		resetField('email')
		resetField('password')
	}

	const password = watch('password') // To compare confirm password


	useEffect(()=>{
		const users=localStorage.getItem('users')
		if(!users){
			localStorage.setItem('users',JSON.stringify([]))
		}else{
			setUsers(JSON.parse(users))
		}
	},[])

	return (
		<FormContainer onSubmit={isSignUp ? handleSubmit(onSubmitSignUp) : handleSubmit(onSubmitLogIn)}>
			<h2 className='title'>{isSignUp ? t('Sign Up') : t('Log In')}</h2>

			{isSignUp && (
				<div>
					<Label htmlFor='name'>{t('Name')}:</Label>
					<Input
						id='name'
						{...register('name', {
							required: t('Name is required *'),
						})}
					/>
					{errors.name && <Error>{errors.name.message}</Error>}
				</div>
			)}

			<div>
				<Label htmlFor='email'>{t('Email')}:</Label>
				<Input
					id='email'
					{...register('email', {
						required: t('Email is required *'),
						validate: value => validator.validate(value) || t('trueEmail'),
					})}
				/>
				{errors.email && <Error>{errors.email.message}</Error>}
			</div>

			<div>
				<Label htmlFor='password'>{t('Password')}:</Label>
				<Input
					id='password'
					type='password'
					{...register('password', {
						required: t('Password is required *'),
						minLength: {
							value: 6,
							message: t('truePass'),
						},
					})}
				/>
				{errors.password && <Error>{errors.password.message}</Error>}
			</div>

			{isSignUp && (
				<div>
					<Label htmlFor='confirmPassword'>{t('Confirm Password')}:</Label>
					<Input
						id='confirmPassword'
						type='password'
						{...register('confirmPassword', {
							required: t('Confirm Password is required *'),
							validate: value =>
								value === password || t('Passwords must match'),
						})}
					/>
					{errors.confirmPassword && (
						<Error>{errors.confirmPassword.message}</Error>
					)}
				</div>
			)}

			{isSignUp && (
				<CheckboxContainer>
					<input
						type='checkbox'
						{...register('terms', {
							required: t('chechkboxTxt'),
						})}
					/>
					<Label>{t('formAgree')}</Label>
					{errors.terms && <Error>{errors.terms.message}</Error>}
				</CheckboxContainer>
			)}

			<Button type='submit'>{isSignUp ? t('Sign Up') : t('Log In')}</Button>

			<SwitchForm>
				<p>
					{isSignUp ? `${t('alreadyHave')}` : `${t('dontHave')}`}{' '}
					<button type='button' onClick={() => setIsSignUp(!isSignUp)}>
						{isSignUp ? t('Log In') : t('Sign Up')}
					</button>
				</p>
			</SwitchForm>
		</FormContainer>
	)
}
