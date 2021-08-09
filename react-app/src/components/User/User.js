import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUserId } from "../../store/post";
import { fetchUser } from "../../store/users";
import Page404 from "../404Page";
import Post from "../Post";
import "./user.css";

function User() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.posts?.byId);
  const user = useSelector((state) => state.users.byId[userId]);

  useEffect(() => {
    dispatch(getPostsByUserId(userId));
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  // useEffect(() => {
  // }, [userPosts])
  console.log("Here's the user posts:", userPosts)
  console.log("Here's the keys in use effect:", Object.keys(userPosts));
  console.log("Here's the values in use effect:", Object.values(userPosts));
  console.log("Here's the entries in use effect:", Object.entries(userPosts));
  
  if (!user) {
    return <Page404 />;
  }

  const postComponents = Object.values(userPosts)?.map((post) => {
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
