import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from "react-router-dom";
import { postOnePost } from '../store/post.js'

export default function PostForm() {
    const [image, newImage] = useState('')
    const [caption, newCaption] = useState('')
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory();

    function submitForm(e) {
        e.preventDefault()
        const data = {image_src: image, userId, caption};

        dispatch(postOnePost(data)).catch(
            async res => {
                const data = await res.json()
            }
        )
        history.push("/posts");
        // window.location.href("/posts")
    }

    return (
        <form onSubmit={submitForm}>
            <h1>create new post</h1>
            <div>
                <label htmlFor="image_src">Image Source</label>
                <input 
                    value={image}
                    onChange={(e) => newImage(e.target.value)}
                    type="text"
                    placeholder="Enter image source"
                />
            </div>
            <div>
                <label htmlFor="caption">Enter Caption</label>
                <input 
                    value={caption}
                    onChange={(e) => newCaption(e.target.value)}
                    type="textarea"
                    placeholder="Enter caption here?"
                />
            </div>
            <div>
                <button className="submit">Submit</button>
            </div>
        </form>
    )
}