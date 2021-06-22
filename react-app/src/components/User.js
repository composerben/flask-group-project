import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOnePost, getPostsByUserId } from "../store/post"

function User() {
  const [user, setUser] = useState({});
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const userPosts = useSelector(state => state.postReducer)

  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
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
    await dispatch(deleteOnePost(post.id))
  }

  const postComponents = Object.values(userPosts).map((post) => {
    return (
      <li key={post.id}>
        <p>Test Stuff</p>
        <img src={post.image_src}></img>
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
    // <ul>
    //   <li>
    //     <strong>User Id</strong> {userId}

    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
  );
}

export default User;
