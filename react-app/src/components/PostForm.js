import React, { useEffect, useState,  } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { postPost } from '../store/post.js'

function PostForm() {
    const [image, newImage] = useState('')
    const [caption, newCaption] = useState('')
    const userId = useSelector(state => state.session.user.id)
    useEffect(() => {

    }, [])

    function submitForm(e) {
        e.preventDefault()
        const data = {image, userId, caption};

        return dispatch(postPost(data)).catch(
            async res => {
                const data = await res.json()

            }
        )

    }

    return (
        <form onSubmit={submitForm}>
            <h1></h1>
        </form>
    )
}
