import React, { useEffect } from "react";
import { fetchUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteOneComment } from "../../store/comment";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  const dispatch = useDispatch();
  const authorId = comment.user_id;
  const user = useSelector((state) => state.session.user);
  const commentAuthor = useSelector((state) => state.users.byId[authorId]);

  useEffect(() => {
    dispatch(fetchUser(authorId));
  }, [dispatch, authorId]);

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOneComment(comment.id));
  };

  return (
    <div className={styles.comment}>
      <p className={styles.comment__header}>
        Posted by: {commentAuthor?.username}
      </p>
      <p className={styles.comment__body}>{comment.body}</p>
      {authorId === user.id && (
        <div className={styles.buttons}>
          <button>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
