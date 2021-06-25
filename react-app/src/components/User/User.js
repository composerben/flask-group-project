import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOnePost, getPostsByUserId } from "../../store/post";
import UserPostForm from "../UserPost";
import Post from "../Post";
import "./user.css";

function User() {
  const [user, setUser] = useState({});
  // const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const userPosts = useSelector((state) => state.postReducer);
  const loggedInUser = useSelector((state) => state.session.user);

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

  // const onEdit = () => {
  //   setEdit((prevState) => !prevState);
  // };

  const postComponents = Object.values(userPosts).map((post) => {
    return (
      <div>
        <div>
          <Post post={post} />
          {/* {loggedInUser.id == userId && (
            <>
              {edit == true && <UserPostForm post={post} />}
              <div className="crud-buttons">
                <button onClick={() => onEdit(post)}>
                  {edit == true ? "Done Editing?" : "Edit Post"}
                </button>
                <button onClick={() => onDelete(post)}>Delete Post</button>
              </div>
            </>
          )} */}
        </div>
      </div>
    );
  });
  return (
    <>
      <h1>{user.username}'s Posts</h1>
      <div className="post-container">{postComponents}</div>
    </>
  );
}

export default User;
