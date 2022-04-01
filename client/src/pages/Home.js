import { Link } from 'react-router-dom'


const Home = () => {
    
    return (
        <div className='home'>
            <h1 className='title'>Welcome to the car forums!</h1>
            <image className='home-img' src="https://images.pexels.com/photos/724489/pexels-photo-724489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Link to='/topics'><button className='buttons'>
            View Topics
        </button></Link>
    </div> 
    )
    
}

export default Home