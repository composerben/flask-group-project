import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostReaction from "../PostReaction";
import { deleteOnePost } from "../../store/post";
import "./post.css";
import CommentBody from "../CommentBody/CommentBody";
import Comment from "../Comment/Comment";
import UserPostForm from "../UserPost";

export default function Post({ post }) {
  const [edit, setEdit] = useState(false);
  const loggedInUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const onEdit = () => {
    setEdit((prevState) => !prevState);
  };

  const onDelete = async (post) => {
    await dispatch(deleteOnePost(post.id));
  };

  const commentComponents = Object.values(post.comment).map((comment) => {
    return (
      <Comment key={comment.id} comment={comment}/>
    );
  });

  return (
    <div className="individual-post">
      <Link to={`/users/${post.user_id}`}>
        <img src={post.image_src} alt="post by user"></img>
      </Link>
      <PostReaction postId={post.id} />
      <p>{post.caption}</p>
      <CommentBody postId={post.id} />
      {commentComponents}
      <div>
        {/* <Comment key={post.comment.id} comment={post.comment} /> */}
        {loggedInUser.id === post.user_id && (
          <>
            {edit === true && <UserPostForm post={post} />}
            <div className="crud-buttons">
              <button onClick={() => onEdit(post)}>
                {edit === true ? "Done Editing?" : "Edit Post"}
              </button>
              <button onClick={() => onDelete(post)}>Delete Post</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
