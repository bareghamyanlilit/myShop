import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from '../../assets/img/Untitled-1.png'

// Animations
const rotateY360 = keyframes`
  0%   { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`

// Styled Components
const Body = styled.div`
	/* background: radial-gradient(ellipse at center, #ffffff, #ffffff 90%); */
	margin: 0;
	padding: 0;
	height: 45vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Scene = styled.div`
	perspective: 1400px;
`

const Glass = styled.div`
	width: 800px;
	height: 300px;
	position: relative;
	transform-style: preserve-3d;
	animation: ${rotateY360} 5s linear infinite;
	display: flex;
	justify-content: center;
	align-items: center;
	.firstSpan{
		transform: rotateX(90deg) translateZ(150px);
	}
	span{
		width: 250px;
		height: 250px;
		/* border-radius: 50%; */
		background: #fff;
		position: absolute;
		bottom: 0;
		transform: rotateX(90deg) translateZ(-75px);
		transform-origin: center;
		box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
	}
`

const Layer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 18px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.1));
	transform: ${({ index }) => `translateZ(${index * 50}px)`};
`

const LayerImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	filter: drop-shadow(2px 4px 6px black);
	transition: transform 0.6s ease;
`

// Component
export const HomeVideo = () => {
	const layerImages = [img, img, img]

	return (
		<Body>
			<Scene>
				<Glass>
					<span className='firstSpan'></span>
					{layerImages.map((src, index) => (
						index === 2 ? (
							<Layer style={{transform:'translateZ(-50px)'}} key={index} index={index}>
							<LayerImg src={src} alt={`Շերտ ${index + 1}`} />
							</Layer>
						) : (
							<Layer key={index} index={index}>
							<LayerImg src={src} alt={`Շերտ ${index + 1}`} />
							</Layer>
						)
					))}
					<span></span>
				</Glass>
			</Scene>
		</Body>
	)
}
