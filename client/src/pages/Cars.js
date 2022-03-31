import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import PostCard from '../components/PostCard'


const Read = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const makeApiCall = async () => {
        let res = await axios.get('http://localhost:3001/posts')
        setPosts(res.data.posts)
        }   
        makeApiCall()
    }, [])
    

    return (
        <div>
            <Header />
            <section>
                <h1 className='rec'>Cars</h1>
                <div className='postContainer'>
                {posts.map((post) => (
                    <PostCard
                        key={post._id}
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        {...post}
                    />
                ))}
                </div>
            </section>
        </div>
    )
}

export default Read