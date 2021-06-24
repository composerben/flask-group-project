import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { likePost, hatePost } from "../store/post_reaction";
import { likePost, hatePost } from "../../store/post";
import "./index.css"

export default function PostReaction({postId}) {
  //   const [reaction, setReaction] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id)
  const likeCount = useSelector((state) => state.postReducer[postId].likes)
  const hateCount = useSelector((state) => state.postReducer[postId].hates)


  function onLike() {
    console.log("\n\npostId----->", postId)
    dispatch(likePost(postId))
  }

  function onHate() {
    console.log("\n\npostId----->", postId);
    dispatch(hatePost(postId))
  }

  return (
    <>
      <div>
        <button onClick={() => onLike()}>Like</button>
      </div>
      <div>
        Likes: {likeCount}
      </div>
      <div>
        <button onClick={() => onHate()}>HATE</button>
      </div>
      <div>
        HATES: {hateCount}
      </div>
    </>
  );
}
