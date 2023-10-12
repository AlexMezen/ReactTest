
import React from 'react';
import './styles/App.css';
import PostItem from './PostItem';
import { useState } from 'react';
import PostList from './PostList';
import PostButton from './PostButton';
import PostInput from './PostInput';


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body:'Description'},
    {id: 2, title: 'JavaScript2', body:'Description'},
    {id: 3, title: 'JavaScript3', body:'Description'},
  ])
  
const [title, setTitle] = useState('');

const addNewPost = (e) => {
  e.preventDefault()
}
  return (
    <div className="App">
      <form>
        <PostInput value = {title} onChange = {e => setTitle(e.target.value)} type="text" placeholder='Title'/>
        <PostInput type="text" placeholder='Description'/>
        <PostButton oncClick = {addNewPost}>Create post</PostButton>

      </form>
   <PostList posts={posts}/>
    </div>
  );
}

export default App;
