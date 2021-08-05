import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { postOnePost } from "../../store/post.js";
import "./post-form.css";

export default function PostForm() {
  const [image, newImage] = useState("");
  const [caption, newCaption] = useState("");
  const [errors, setErrors] = useState("");
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(e) {
    e.preventDefault();

    //TODO: MAKE ERRORS, BUT IT WORKS
    try {
      dispatch(
        postOnePost({
          image_src: image,
          userId,
          caption,
        })
      );
      history.push("/posts");
    } catch (e) {
      let error = new Error(e);
      console.error(error);
    }
  }

  return (
    <div className="parentPostForm">
      <h1>create new post</h1>
      <form onSubmit={submitForm} className="newPostForm">
        <div>
          <label htmlFor="image_src">Image Source: </label>
          <input
            value={image}
            onChange={(e) => newImage(e.target.value)}
            type="text"
            placeholder="Enter image source"
            className="textspot"
          />
        </div>
        <div>
          <label htmlFor="caption">Enter Caption: </label>
          <input
            value={caption}
            onChange={(e) => newCaption(e.target.value)}
            type="textarea"
            placeholder="Enter caption here?"
            className="textspot"
          />
        </div>
        <div>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
