import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOnePost, getPostsByUserId } from "../../store/post";
import UserPostForm from "../UserPost";
import PostReaction from "../PostReaction";
import Post from "../Post";
import "./user.css";

function User() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const userPosts = useSelector((state) => state.postReducer);

  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();

      setUser(user);
      await dispatch(getPostsByUserId(userId));
    })();
  }, [userId, dispatch]);

  if (!user) {
    return null;
  }

  const onDelete = async (post) => {
    await dispatch(deleteOnePost(post.id));
  };

  const onEdit = async (post) => {
    // await dispatch(editOnePost(post.id))
  };

  const postComponents = Object.values(userPosts).map((post) => {
    return (
      <div>
        <div>
          <Post post={post} />
          <UserPostForm post={post} />
          <button onClick={() => onDelete(post)}>Delete</button>
          <button onClick={() => onEdit(post)}>Edit</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1>{user.username}'s Posts</h1>
      <ul>{postComponents}</ul>
    </>
  );
}

export default User;
