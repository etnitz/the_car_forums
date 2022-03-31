import axios from 'axios'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState(0)

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
                author: postName
            }
        })
    }

    return (
        <form class="form-layout" onSubmit={(e) => handleSubmit(e)}>
            <h1>Car Forum Post</h1>
            <ul>
                <li>
                    <label for="PostTitle">Title</label>
                    <input type="text" name="PostTitle" onChange={handleChange} maxlength="100" />
                        <span>Enter your username</span>
                </li>
                <li>
                    <label for="description">Description</label>
                    <input type="text" name="Description" onChange={handleChange2} maxlength="100" />
                        <span>Enter how you feel about our amusement park</span>
                </li>
                <li>
                    <label for="rating">Rating</label>
                    <input type="number" name="Rating" onChange={handleChange3}/>
                    <span>Give a rating from 1 being bad to 5 living in paradise</span>
                </li>
                <li>
                    <button className='form-layout-button'>Submit</button>
                </li>
            </ul>
        </form>
    )
}

export default Form