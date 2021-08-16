import React, { useEffect, useState } from "react";
import { fetchUser } from "../../store/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteOneComment } from "../../store/comment";
import EditCommentForm from "../EditCommentForm/EditCommentForm.js";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  const dispatch = useDispatch();
  const authorId = comment.user_id;
  const user = useSelector((state) => state.session.user);
  const commentAuthor = useSelector((state) => state.users.byId[authorId]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(fetchUser(authorId));
  }, [dispatch, authorId]);

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOneComment(comment.id));
  };

  const onEdit = (e) => {
    setEdit((prevState) => !prevState);
  };

  return (
    <div className={styles.comment}>
      <p className={styles.comment__header}>
        --Posted by: {commentAuthor?.username}
      </p>
      <p className={styles.comment__body}>{comment.body}</p>
      {authorId === user.id && (
        <>
          {edit === true && <EditCommentForm comment={comment} />}
          <div className={styles.buttons}>
            <button className={styles.edit__button} onClick={onEdit}>
              {edit === true ? "CANCEL" : "Edit Body"}
            </button>
            <button className={styles.delete__button} onClick={onDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
