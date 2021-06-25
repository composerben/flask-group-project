import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import PostReaction from "../PostReaction";
import "./post.css";
import CommentBody from "../CommentBody/CommentBody";
import Comment from "../Comment/Comment";

export default function Post({ post }) {

  const commentComponents = Object.values(post.comment).map((comment) => {
    return (
      <div>
        <Comment key={comment.id} comment={comment} />
      </div>
    );
  });


  return (
    <div className="individual-post">
      <Link to={`/users/${post.user_id}`}>
        <img src={post.image_src}></img>
      </Link>
      <PostReaction postId={post.id} />
      <p>{post.caption}</p>
      <CommentBody postId={post.id} />
      {commentComponents}
    </div>
  );
}
