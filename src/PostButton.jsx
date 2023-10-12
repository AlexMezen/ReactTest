import React from "react";
import classes from "./styles/PostButton.module.css";
const PostButton = ({children, ...props}) => {
return(
  <button {...props} className={classes.pstbtn}>
    {children}
  </button>
)
}
export default PostButton;