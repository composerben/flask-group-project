import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { deleteOnePost, getAllPosts } from "../../store/post";
import { useDispatch, useSelector } from "react-redux";
import PostReaction from "../PostReaction";
import Post from "../Post";
import "./post-show.css";
import CommentBody from "../CommentBody/CommentBody";
import Comment from "../Comment/Comment";

function PostShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const statePosts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const postComponents = Object.values(statePosts).map((post) => {
    return (
      <div>
        <Post key={post.id} post={post} />
      </div>
    );
  });


  return (
    <>
      <h1>check out what our users are up to!</h1>
      <div className="post-container">{postComponents}</div>
    </>
  );
}

export default PostShow;
