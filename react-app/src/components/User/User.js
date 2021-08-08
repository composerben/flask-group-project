import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../../store/post";
import Page404 from "../404Page";
import Post from "../Post";
import "./user.css";

function User() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(true);
  const userPosts = useSelector((state) => state.posts);
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const user = await response.json();
        setUser(user);
        await dispatch(getPostsByUserId(userId));
      } else {
        setUser(false);
      }
    })();
  }, [userId, dispatch]);

  if (!user) {
    return <Page404 />;
  }

  const postComponents = Object.values(userPosts).map((post) => {
    return <Post post={post} />;
  });

  return (
    <>
      <h1>{user.username}'s Posts</h1>
      <div className="post-container">{postComponents}</div>
    </>
  );
}

export default User;
