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

export const ContactForm = () => {
	const { t } = useTranslation()

	return (
		<MainDiv>
			<ContentWrapper>
				<MapContainer>
					<MapIframe
						title='Map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d-122.40179928468284!3d37.79345117975708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5a7b5a3f%3A0xafe8e30e1c716774!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1604102810658!5m2!1sen!2sus'
						allowFullScreen=''
						loading='lazy'
					/>
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
