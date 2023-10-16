import React from "react";
import PostInput from "./PostInput";
import PostButton from "./PostButton";
import { useState } from "react";
const PostForm = ({create}) => {
const [post, setPost] = useState({title: '', body: ''});
const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    };
    create(newPost)
  setPost({title: '', body: ''})
  }


return(
    <form>
    <PostInput  value = {post.title} onChange = {e => setPost({...post, title: e.target.value})} type="text" placeholder='Title'/>
    <PostInput  value = {post.body} onChange = {e => setPost({...post, body: e.target.value})} type="text" placeholder='Body'/>
    <PostButton onClick = {addNewPost} >Create post</PostButton>

  </form>
)
}
export default PostForm;