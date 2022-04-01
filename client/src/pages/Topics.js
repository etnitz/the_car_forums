import { Link } from 'react-router-dom'
import Header from '../components/Header'



const Topics = () => {
    return (
        <div className='topics-page'>
            <Header />
            <section>
                <Link to='/cars'><button className='buttons'>
                Cars Topic
                </button></Link> 
                <Link to='/racing'><button className='buttons'>
                Racing Topic
                </button></Link> 
            </section>
        </div>
    )
}

export default Topics