import React, { useEffect } from "react";
import { getAllPosts } from "../../store/post";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post";
import "./post-show.css";

function PostShow() {
  const dispatch = useDispatch();
  const statePosts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const postComponents = Object.values(statePosts).map((post) => {
    return post ? (
      <div>
        <Post key={post?.id} post={post} />
      </div>
    ) : (
      <div>Loading...</div>
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
