import React from "react";
import { Link } from "react-router-dom";
import PostReaction from "../PostReaction";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="individual-post">
      <Link to={`/users/${post.user_id}`}>
        <img src={post.image_src}></img>
      </Link>
      <PostReaction postId={post.id} />
      <p>{post.caption}</p>
    </div>
  );
}
