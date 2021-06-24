import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { likePost, hatePost } from "../store/post_reaction";
import { likePost, hatePost, deleteOnePost } from "../../store/post";
import "./post-reaction.css";

export default function PostReaction({ postId }) {
  //   const [reaction, setReaction] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);
  const likeCount = useSelector((state) => state.postReducer[postId].likes);
  const hateCount = useSelector((state) => state.postReducer[postId].hates);

  function onLike() {
    dispatch(likePost(postId));
  }

  async function onHate() {
    await dispatch(hatePost(postId));
    console.log("HATES: ", hateCount);
    console.log("LIKES: ", likeCount);
    if (hateCount > likeCount) {
      console.log("BEFORE DISPATCH DELETE");
      await dispatch(deleteOnePost(postId));
      console.log("AFTER DISPATCH DELETE");
    }
  }

  return (
    <>
      <div>
        <button onClick={() => onLike()}>Like</button>
      </div>
      <div>Likes: {likeCount}</div>
      <div>
        <button onClick={() => onHate()}>HATE</button>
      </div>
      <div>HATES: {hateCount}</div>
    </>
  );
}
