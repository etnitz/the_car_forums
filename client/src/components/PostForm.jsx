import axios from 'axios'
import { useState } from 'react'

const PostForm = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const [postAuthor, setPostAuthor] = useState('')

    const handleChange = (event) => {
        const target = event.target.value;
        setName(target);
        console.log(target)
    }

    const handleChange2 = (event) => {
        const target = event.target.value;
        setDesc(target);
    }

    const handleChange3 = (event) => {
        const target = event.target.value;
        setRating(target)
    }

    function handleSubmit(e) {
        axios({
            url: "http://localhost:3001/createPosts",
            method: 'post',
            data: {
                title: postTitle,
                content: postContent,
                author: postAuthor
            }
        })
    }

    return (
        <form class="form-layout" onSubmit={(e) => handleSubmit(e)}>
            <h1>Create a Post</h1>
            <ul>
                <li>
                    <label for="PostTitle">Title</label>
                    <input type="text" name="PostTitle" onChange={handleChange} maxlength="100" />
                        <span>Give your post a title</span>
                </li>
                <li>
                    <label for="postContent">Post</label>
                    <input type="text" name="PostContent" onChange={handleChange2} maxlength="100" />
                        <span>Write your post here</span>
                </li>
                <li>
                    <label for="postAuthor">Author</label>
                    <input type="text" name="PostAuthor" onChange={handleChange3} maxlength="100" />
                    <span>Give yourself a name</span>
                </li>
                <li>
                    <button className='form-layout-button'>Submit</button>
                </li>
            </ul>
        </form>
    )
}

export default PostForm