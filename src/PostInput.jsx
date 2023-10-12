import React from "react";
import classes from './styles/PostInput.module.css'
const PostInput = (props) => {
    return (
        <input className = {classes.postinput} {...props} />
    )
}
export default PostInput;