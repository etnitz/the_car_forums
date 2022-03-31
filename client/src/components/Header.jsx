import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <h2 className='corp'>The Car Forums</h2>
                <Link to='/' className='navWord first'>Home</Link>
                <Link to='/topics'className='navWord'>Topics</Link>
            </nav>
        </header>
    )
}

export default Header