import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { deleteOnePost, getAllPosts } from "../../store/post";
import { useDispatch, useSelector } from "react-redux";
import PostReaction from "../PostReaction";
import Post from "../Post";
import "./index.css"

function PostShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [posts, setPosts] = useState([]);
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
      <h1>Post Show: </h1>
      <ul>{postComponents}</ul>
    </>
  );
}

export default PostShow;
