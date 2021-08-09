import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  const commentAuthor = comment.user_id;
  const user = useSelector((state) => state.session.user);

  return (
    <div className={styles.comment}>
      <p>Posted by: {user.username}</p>
      <p>{comment.body}</p>
      {commentAuthor === user.id && (
        <div className={styles.buttons}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}
