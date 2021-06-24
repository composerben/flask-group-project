import React from "react"
import PostReaction from "../PostReaction" 


export default function Post({post}) {
    return (
        <div>
            <img src={post.image_src}></img>
            <p>{post.caption}</p>
            <PostReaction postId={post.id}/>
        </div>
    )
}