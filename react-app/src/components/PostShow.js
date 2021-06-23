import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { deleteOnePost, getAllPosts } from "../store/post";
import { useDispatch, useSelector } from "react-redux";
import PostReaction from "./PostReaction";

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
      <li key={post.id}>
        <NavLink to={`/posts/${post.id}`}>
          <img src={post.image_src}></img>
        </NavLink>
        <p>{post.caption}</p>
        <PostReaction postId={post.id}/>
      </li>
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
