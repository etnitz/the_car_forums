import axios from 'axios'
import { useEffect, useState } from 'react'

const DeletePost = () => {
    function handleSubmit(e) {
        axios({
            url: "http://localhost:3001/posts/:id",
            method: 'delete',
            data: {
                title: postTitle,
                content: postContent,
                author: postAuthor,
                _id: postId
            }
        })
    }
}