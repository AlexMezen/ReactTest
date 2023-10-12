import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
return (
    <div>
        <h1 className='tit'>Post List</h1>
      {posts.map(post =>
      <PostItem post={post} key={post.id} 
      />
)}
    </div>
)

}
export default PostList;