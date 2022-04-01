import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DeletePost = () => {
    const [selectedPost, setPost] = useState('')
    let { id } = useParams()

    useEffect(() => {
        let selectedPost = props.posts.find(
            (post) => post.id === parseInt(id)
        )
        setPost(selectedPost)
    }, [props.post, id])
    
    useEffect(() => {
        const makeApiCall = async () => {
        let res = await axios.delete('http://localhost:3001/posts/:id')
        setPosts(res.data.posts)
        }   
        makeApiCall()
    }, [])
}

export default DeletePost