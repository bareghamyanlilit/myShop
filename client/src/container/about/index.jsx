// About.jsx
import React from 'react'
import { AboutImage, AboutImages, AboutText, Container, HeroSection, HeroTitle, PageContainer, Section, TeamMember, TeamMembers, TeamSection, TeamTitle } from './styled'
import img1 from "../../assets/img/about.jpg"
export const AboutPage = () => {
  return (
		<PageContainer>
			<HeroSection>
				<HeroTitle>Welcome to [My Shop ]</HeroTitle>
			</HeroSection>
			<Container>
				<Section>
					<AboutText>
						<h2>Our Story</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
							Nulla quis sem at nibh elementum imperdiet.
						</p>
						<p>
							Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
							semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
							Class aptent taciti sociosqu ad litora torquent per conubia
							nostra.
						</p>
					</AboutText>
				</Section>

				<Section>
					<h2>What We Offer</h2>
					<p>
						Our shop specializes in providing top-notch products that cater to
						all your needs. From electronics to fashion, we have it all.
					</p>
					<AboutImages>
						<AboutImage src={img1} alt='Product 1' />
						<AboutImage src={img1} alt='Product 2' />
						<AboutImage src={img1} alt='Product 3' />
					</AboutImages>
				</Section>

				<TeamSection>
					<TeamTitle>Meet Our Team</TeamTitle>
					<TeamMembers>
						<TeamMember>
							<img src={img1} alt='Team Member 1' />
							<h3>John Doe</h3>
							<p>CEO</p>
						</TeamMember>
						<TeamMember>
							<img src={img1} alt='Team Member 2' />
							<h3>Jane Smith</h3>
							<p>Marketing Manager</p>
						</TeamMember>
						<TeamMember>
							<img src={img1} alt='Team Member 3' />
							<h3>Sam Wilson</h3>
							<p>Product Designer</p>
						</TeamMember>
					</TeamMembers>
				</TeamSection>
			</Container>
		</PageContainer>
	)
};
