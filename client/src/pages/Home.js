import { Link } from 'react-router-dom'


const Home = () => {
    
    return (
        <div className='home'>
            <h1 className='title'>Welcome to the car forums!</h1>
        <Link to='/topics'><button className='home-button'>
            Read Topics
        </button></Link>
        <Link to='/read'><button className='home-button'>
            Create a post
        </button></Link>   
    </div> 
    )
    
}

export default Home