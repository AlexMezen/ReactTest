import React from "react";
import classes from './styles/PostInput.module.css'
const PostInput = React.forwardRef((props, ref) => {
    return (
        <input className = {classes.postinput} {...props} />
    )
})
export default PostInput;