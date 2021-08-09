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
  const userPosts = useSelector((state) => state.posts.byId);
  const user = useSelector((state) => state.users.byId[userId]);

  useEffect(() => {
    dispatch(getPostsByUserId(userId));
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    console.log("Here's in use effect:", Object.values(userPosts));
  }, [userPosts])

  console.log("Here's the posts:", userPosts);
  console.log("Here's after manipulation:", Object.values(userPosts));

  if (!user) {
    return <Page404 />;
  }

  const postComponents = Object.values(userPosts).map((post) => {
    return <Post post={post} />;
  });

  console.log("Here's the post components:", postComponents);

  return (
    <>
      <h1>{user.username}'s Posts</h1>
      <div className="post-container">{postComponents}</div>
    </>
  );
}

export default User;
