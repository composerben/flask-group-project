import React, { useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { editOnePost } from "../store/post";

export default function UserPostForm({post}) {
  const [caption, setCaption] = useState(post.caption)
  const dispatch = useDispatch();

  const onEdit = async (e) => {
    e.preventDefault();
    await dispatch(editOnePost(post.id, caption))
  }

  return (
    <form onSubmit={onEdit}>
      <input
        type="textarea"
        value={caption}
        onChange={e => setCaption(e.target.value)}
      />
      <button type="submit">Submit Edit</button>
    </form>
  )
}