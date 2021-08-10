import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editOnePost } from "../../store/post";
import "./user-post.css";

export default function UserPostForm({ post }) {
  const [caption, setCaption] = useState(post.caption);
  const dispatch = useDispatch();

  const onEdit = async (e) => {
    e.preventDefault();
    await dispatch(editOnePost(post.id, caption));
    setCaption("");
  };

  return (
    <form className="form-caption" onSubmit={onEdit}>
      <textarea
        value={caption}
        placeholder="Edit Caption"
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Submit Edit</button>
    </form>
  );
}
