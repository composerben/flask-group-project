import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PostShow() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/posts");
      const responseData = await response.json();
      console.log("-----------------------", responseData)
      setPosts(responseData.posts);
    }
    fetchData();
  }, []);

  const postComponents = posts.map((post) => {
    return (
      <li key={post.id}>
        <p>Test Stuff</p>
        <NavLink to={`/posts/${post.id}`}><img src={post.image_src}></img></NavLink>
        <p>{post.caption}</p>

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
