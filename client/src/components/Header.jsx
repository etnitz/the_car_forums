import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <h2 className='topic-title'>The Car Forums</h2>
                <Link to='/' className='nav'>Home</Link>
                <Link to='/topics'className='nav'>Topics</Link>
            </nav>
        </header>
    )
}

export default Header