import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Comment.module.css";

export default function Comment({ comment }) {
  const commentAuthor = comment.user_id;
  const userId = useSelector((state) => state.session.user.id);

  return (
    <div className={styles.comment}>
      <p>{comment.body}</p>
      {commentAuthor === userId && (
        <div className={styles.buttons}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}
