import React from "react";
import PostButton from "./PostButton";
const PostItem = (props) => {
    return(
        <div className='post'>
        <div className='post-content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className='post-btns'>
          <PostButton onClick = {() => props.remove(props.post)} >Delete</PostButton>
        </div>
        </div>
    )
}
export default PostItem;