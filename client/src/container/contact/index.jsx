import React from 'react'
import {
	ContactContainer,
	Form,
	Input,
	TextArea,
	Button,
	Label,
	SectionTitle,
	MainDiv,
	MapContainer,
	MapIframe,
	ContentWrapper,
} from './styled'
import { useTranslation } from 'react-i18next'
import Map from '../../component/map'

export const ContactForm = () => {
	const { t } = useTranslation()

	return (
		<MainDiv>
			<ContentWrapper>
				<MapContainer>
					<Map/>
				</MapContainer>
				<ContactContainer>
					<SectionTitle>{t('Contact Us')}</SectionTitle>
					<Form>
						<div>
							<Label htmlFor='name'>{t('Name')}:</Label>
							<Input id='name' type='text' placeholder={t('Enter your name')} />
						</div>
						<div>
							<Label htmlFor='email'>{t('Email')}:</Label>
							<Input
								id='email'
								type='email'
								placeholder={t('Enter your email')}
							/>
						</div>
						<div>
							<Label htmlFor='subject'>{t('Subject')}:</Label>
							<Input
								id='subject'
								type='text'
								placeholder={t('Enter subject')}
							/>
						</div>
						<div>
							<Label htmlFor='message'>{t('Message')}:</Label>
							<TextArea
								id='message'
								rows='5'
								placeholder={t('Enter your message')}
							/>
						</div>
						<Button type='submit'>{t('Send Message')}</Button>
					</Form>
				</ContactContainer>
			</ContentWrapper>
		</MainDiv>
	)
}
