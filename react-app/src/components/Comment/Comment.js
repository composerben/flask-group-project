import React, { useEffect } from "react";
import { fetchUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  const dispatch = useDispatch();
  const authorId = comment.user_id;
  const user = useSelector((state) => state.session.user);
  const commentAuthor = useSelector(state => state.users.byId[authorId])


  useEffect(() => {
      dispatch(fetchUser(authorId));
  }, [dispatch, authorId])

  return (
    <div className={styles.comment}>
      <p>Posted by: {commentAuthor?.username}</p>
      <p>{comment.body}</p>
      {authorId === user.id && (
        <div className={styles.buttons}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}
