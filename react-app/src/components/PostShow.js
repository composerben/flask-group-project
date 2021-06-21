import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PostShow() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/posts");
      const responseData = await response.json();
      setPosts(responseData.posts);
    }
    fetchData();
  }, []);

  const postComponents = posts.map((post) => {
    return (
      <li key={post.id}>
        {/* <NavLink to={`/users/${user.id}`}>{user.username}</NavLink> */}
        <p>Test Stuff</p>
        <p>{post.image_src}</p>
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
