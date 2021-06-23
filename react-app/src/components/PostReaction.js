import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { likePost, hatePost } from "../store/post_reaction";

export default function PostReaction({postId}) {
  //   const [reaction, setReaction] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id)

  function onLike() {
    dispatch(likePost(userId, postId))
  }

  function onHate() {
    dispatch(hatePost(userId, postId))
  }

  return (
    <>
      <div>
        <button onClick={() => onLike()}>Like</button>
      </div>
      <div>
        <button onClick={() => onHate()}>HATE</button>
      </div>
    </>
  );
}
