import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { deleteOnePost, getAllPosts } from "../store/post";
import { useDispatch, useSelector } from 'react-redux';


function PostShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const statePosts = useSelector(state => state.posts)

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch("/api/posts");
    //   const responseData = await response.json();
    //   setPosts(responseData.posts);
    // }
    // fetchData();
    dispatch(getAllPosts())
  }, [dispatch]);

  const onDelete = (post) => {
    dispatch(deleteOnePost(post.id))
    history.push("/posts")
  }

  const postComponents = posts.map((post) => {
    return (
      <li key={post.id}>
        <p>Test Stuff</p>
        <NavLink to={`/posts/${post.id}`}><img src={post.image_src}></img></NavLink>
        <p>{post.caption}</p>
        <button onClick={() => onDelete(post)}>Delete</button>

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
