import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentOneComment } from "../../store/comment.js";
import style from "./CommentBody.module.css";

export default function CommentBody({ postId }) {
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const commentComment = (e) => {
    e.preventDefault();
    try {
      dispatch(commentOneComment({ postId, body }));
      setBody("");
    } catch (e) {
      let error = new Error(e);
      console.error(error)
    }
  };

  return (
    <div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Tell strangers on the internet your useless thoughts"
      />
      <button className={style.edit__button} onClick={commentComment}>Submit Opinion</button>
    </div>
  );
}
