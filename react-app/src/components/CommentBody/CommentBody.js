import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { commentOneComment } from "../../store/comment.js";
import "./CommentBody.css";

export default function CommentBody({ postId }){
  const [body, setBody] = useState("");
  const userId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  const commentComment = (e) => {
    e.preventDefault();
    try {
      dispatch(commentOneComment({ postId, body }));
    } catch (e) {
      let error = new Error(e);
      console.log("\tComment failed:", error);
    }
  };

  return (
    <div>
      <input
        value={body}
        type="textarea"
        onChange={(e) => setBody(e.target.value)}
        placeholder="Tell strangers on the internet your useless thoughts"
      />
      <button onClick={commentComment}>Submit Opinion</button>
    </div>
  );
};
