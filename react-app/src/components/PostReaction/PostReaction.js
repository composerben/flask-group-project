import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, hatePost, deleteOnePost } from "../../store/post";
import "./post-reaction.css";

export default function PostReaction({ postId }) {
  const dispatch = useDispatch();

  const likeCount = useSelector((state) => state.postReducer[postId].likes);
  const hateCount = useSelector((state) => state.postReducer[postId].hates);

  function onLike() {
    dispatch(likePost(postId));
  }

  async function onHate() {
    await dispatch(hatePost(postId));
    if (hateCount > likeCount) {
      await dispatch(deleteOnePost(postId));
    }
  }

  return (
    <div className="reactions-container">
      <div>
        <button className="like-button" onClick={() => onLike()}>
          <i className="far fa-thumbs-up"></i>
          <div className="reaction-counter">{likeCount}</div>
        </button>
      </div>
      <div>
        <button className="hate-button" onClick={() => onHate()}>
          <i className="fas fa-skull-crossbones"></i>
          <div className="reaction-counter">{hateCount}</div>
        </button>
      </div>
    </div>
  );
}
