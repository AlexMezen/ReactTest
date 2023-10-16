
import React from 'react';
import './styles/App.css';
import { useState, } from 'react';
import PostList from './PostList';
import PostButton from './PostButton';
import PostInput from './PostInput';
import PostForm from './PostForm';
import PostSelect from './PostSelect';




function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript2', body:'Description'},
    {id: 3, title: 'JavaScript3', body:'Description'},
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts(){
if(selectedSort){
  return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
}
return posts;
  }
  
  const sortedPosts = getSortedPosts()
const createPost = (newPost) => {
setPosts([...posts, newPost])
}
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}
const sortPosts = (sort) => {
setSelectedSort(sort)
}
  return (
    <div className="App">
     <PostForm create = {createPost} />
     <PostInput value={searchQuery}
     onChange={e => setSearchQuery(e.target.value)}
     placeholder='Search...'
     />
     <PostSelect
     value = {selectedSort}
     onChange={sortPosts}
     defaultValue={'Sorted by'}
     options={[
      {value: 'title', name: 'By title'},
      {value: 'body', name: 'By body'}

     ]}
     />
     {posts.length !== 0
     ?    <PostList remove = {removePost} posts={sortedPosts}/>
     :<h2 className='emptylist'>Post list is empty!</h2>
     }
    </div>
  );
}

export default App;
