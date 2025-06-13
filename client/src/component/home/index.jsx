import { MainDiv } from './styled'
import video from '../../assets/video/home.mp4'
import { HomeVideo } from '../home-video'
export const Home = () => {
    return (
			<>
				<MainDiv>
					<h1 className='title'>LOOK</h1>
					<div className='image'>
						<HomeVideo/>
						{/* <video autoPlay muted>
							<source src={video} type='video/mp4' />
							Your browser does not support the video tag.
						</video> */}
					</div>
					<h1 className='title'>PTIC</h1>
				</MainDiv>
			</>
		)
}