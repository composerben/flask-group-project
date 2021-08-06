import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { commentOneComment } from "../../store/comment.js";
import "./CommentBody.css";
import { getAllPosts } from "../../store/post.js";

export default function CommentBody({ postId }) {
  const [body, setBody] = useState("");
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  const commentComment = (e) => {
    e.preventDefault();
    try {
      dispatch(commentOneComment({ postId, body }));
      setBody("");
    } catch (e) {
      let error = new Error(e);
    }
  };

  return (
    <div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Tell strangers on the internet your useless thoughts"
      />
      <button onClick={commentComment}>Submit Opinion</button>
    </div>
  );
}
