import { MainDiv } from './styled'
import video from '../../assets/video/home.mp4'
export const Home = () => {
    return (
			<>
				<MainDiv>
					<h1>ST</h1>
					<div className='image'>
						<video autoPlay muted>
							<source src={video} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
					<h1>RE</h1>
				</MainDiv>
			</>
		)
}