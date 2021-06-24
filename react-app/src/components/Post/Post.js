import React from "react";
import PostReaction from "../PostReaction";
import "./post.css";
import CommentBody from "../CommentBody/CommentBody";

export default function Post({ post }) {
  return (
    <div>
      <img src={post.image_src}></img>
      <p>{post.caption}</p>
      <PostReaction postId={post.id} />
      <CommentBody postId={post.id} />
    </div>
  );
}
