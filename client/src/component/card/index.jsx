import React, { useState } from 'react'
import { Button, CardBack, CardChip, CardContainer, CardExpiry, CardFront, CardHolder, CardLogo, CardNumber, CardTypeLogo, Container, Cvv, Date, Input, InputForm, Label, MagneticStrip, Name, Number, Signature, SignatureLine } from './styled'

export const AddCard = () => {

	const [cardNumber, setCardNumber] = useState('#### #### #### ####')
	const [cardHolder, setCardHolder] = useState('FULL NAME')
	const [expiryDate, setExpiryDate] = useState('MM/YY')
	const [cvv, setCvv] = useState('***')
	const [cardTypeLogo, setCardTypeLogo] = useState('')
	const [isFlipped, setIsFlipped] = useState(false)
	
	const handleCardNumberChange = e => {
		let value = e.target.value.replace(/\s/g, '') // Remove spaces
		value = value.replace(/(\d{4})/g, '$1 ').trim() // Add space every 4 digits
		setCardNumber(value || '#### #### #### ####')

		// Detect card type
		if (/^4/.test(value)) {
			setCardTypeLogo(
				'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
			)
		} else if (/^5[1-5]/.test(value)) {
			setCardTypeLogo(
				'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
			)
		} else if (/^3[47]/.test(value)) {
			setCardTypeLogo(
				'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg'
			)
		} else {
			setCardTypeLogo('')
		}
	}

	const handleCardHolderChange = e => {
		setCardHolder(e.target.value.toUpperCase() || 'FULL NAME')
	}

	const handleExpiryDateChange = e => {
		let value = e.target.value
		if (value.length === 2 && !value.includes('/')) {
			value = value + '/'
		}
		setExpiryDate(value || 'MM/YY')
	}

	const handleCvvChange = e => {
		setCvv(e.target.value || '***')
	}

	const save=()=>{
		// nav(`${loc}`)
	}
	return (
		<Container>
			<CardContainer className={isFlipped ? 'flipped' : ''}>
				{/* Front Side */}
				<CardFront>
					<CardLogo>
						MyBank
						{cardTypeLogo && (
							<CardTypeLogo src={cardTypeLogo} alt='Card Type' />
						)}
					</CardLogo>
					<CardChip />
					<CardNumber>{cardNumber}</CardNumber>
					<CardHolder>
						<Label>Card Holder</Label>
						<Name>{cardHolder}</Name>
					</CardHolder>
					<CardExpiry>
						<Label>Expires</Label>
						<Date>{expiryDate}</Date>
					</CardExpiry>
				</CardFront>

				{/* Back Side */}
				<CardBack>
					<MagneticStrip />
					<Signature>
						<Label>Authorized Signature</Label>
						<SignatureLine />
					</Signature>
					<Cvv>
						<Number>{cvv}</Number>
					</Cvv>
				</CardBack>
			</CardContainer>

			{/* Input Form */}
			<InputForm>
				<Label htmlFor='card-number-input'>Card Number</Label>
				<Input
					id='card-number-input'
					type='number'
					maxLength='19'
					placeholder='1234 5678 9012 3456'
					onChange={handleCardNumberChange}
				/>

				<Label htmlFor='card-holder-input'>Card Holder Name</Label>
				<Input
					id='card-holder-input'
					type='text'
					placeholder='John Doe'
					onChange={handleCardHolderChange}
				/>

				<Label htmlFor='card-expiry-input'>Expiry Date</Label>
				<Input
					id='card-expiry-input'
					type='text'
					maxLength='5'
					placeholder='MM/YY'
					onChange={handleExpiryDateChange}
				/>

				<Label htmlFor='card-cvv-input'>CVV</Label>
				<Input
					id='card-cvv-input'
					type='number'
					maxLength='3'
					placeholder='123'
					onChange={handleCvvChange}
					onFocus={() => setIsFlipped(true)}
					onBlur={() => setIsFlipped(false)}
				/>
			</InputForm>
			<Button onClick={save}>Save</Button>
		</Container>
	)
}
