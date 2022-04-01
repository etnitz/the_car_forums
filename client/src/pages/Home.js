import { Link } from 'react-router-dom'


const Home = () => {
    
    return (
        <div className='home'>
            <h1 className='title'>Welcome to the car forums!</h1>
        <Link to='/topics'><button className='buttons'>
            View Topics
        </button></Link>
    </div> 
    )
    
}

export default Home