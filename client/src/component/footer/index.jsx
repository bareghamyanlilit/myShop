import React from 'react'
import {
	FooterContainer,
	FooterSection,
	FooterLinks,
	FooterLink,
	FooterTitle,
	SocialIcons,
	SocialIcon,
	ContactInfo,
	Copyright,
	FooterSections,
} from './styled'
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

export const MyFooter = () => {
	return (
		<FooterContainer>
			<FooterSections>
				
				<FooterSection>
					<FooterTitle>Shop</FooterTitle>
					<FooterLinks>
						<FooterLink href='/about'>About Us</FooterLink>
						<FooterLink href='/shop'>Shop</FooterLink>
						<FooterLink href='/faq'>FAQ</FooterLink>
						<FooterLink href='/contact'>Contact Us</FooterLink>
					</FooterLinks>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Follow Us</FooterTitle>
					<SocialIcons>
						<SocialIcon
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaFacebookF />
						</SocialIcon>
						<SocialIcon
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaInstagram />
						</SocialIcon>
						<SocialIcon
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaTwitter />
						</SocialIcon>
						<SocialIcon
							href='mailto:info@shop.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaEnvelope />
						</SocialIcon>
					</SocialIcons>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Contact</FooterTitle>
					<ContactInfo>
						<p>Email: info@shop.com</p>
						<p>Product: +1 234 567 890</p>
						<p>Address: 123 Shop Street, New York, NY</p>
					</ContactInfo>
				</FooterSection>

			</FooterSections>

			<Copyright>
				© {new Date().getFullYear()} Shop. All rights reserved.
			</Copyright>
		</FooterContainer>
	)
}
