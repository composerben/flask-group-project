import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editOneComment } from "../../store/comment";

export default function EditCommentForm({ comment }) {
  const [body, setBody] = useState(comment.body);
  const dispatch = useDispatch();

  const onEdit = async (e) => {
    e.preventDefault();
    await dispatch(editOneComment(comment.id, body));
    setBody("");
  };

  return (
    <form className="form-caption" onSubmit={onEdit}>
      <textarea
        value={body}
        placeholder="Edit Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Submit Edit</button>
    </form>
  );
}
