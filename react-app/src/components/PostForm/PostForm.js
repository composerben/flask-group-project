import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { postOnePost } from "../../store/post.js";
import "./post-form.css";

export default function PostForm() {
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [caption, newCaption] = useState("");
  const [errors, setErrors] = useState("");
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();
  const history = useHistory();

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    //TODO: MAKE ERRORS, BUT IT WORKS
    try {
      formData.append("image", image);
      formData.append("caption", caption);
      formData.append("user_id", userId);
      setImageLoading(true);

      await dispatch(
        postOnePost(formData)
      );
      history.push("/posts");
    } catch (e) {
      let error = new Error(e);
      console.error(error);
    }
  }

  const updateImage = e => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <div className="parentPostForm">
      <h1>create new post</h1>
      <form onSubmit={submitForm} className="newPostForm">
        <div>
          <label htmlFor="image">Image: </label>
          <input
            onChange={updateImage}
            type="file"
            accept="image/*"
            placeholder="Upload image"
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
          {imageLoading && <p>Loading...</p>}
        </div>
      </form>
    </div>
  );
}
