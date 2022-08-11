import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import DisplayPost from './Components/DisplayPosts/DisplayPosts'
import NavBar from './Components/NavBar/NavBar'
import './App.css'


function App() {

  const [posts, setPosts] = useState([
    {name: 'Bugs Bunny', date: '11/7/2020, 12:35:42 PM', message: 'Eh, what’s up, doc?'}, 
    {name: 'Elmer Fudd', date: '5/23/2021, 11:22:34 AM', message: 'Come over here you scwewy wabbit.'},
    {name: 'Tweety Bird', date: '7/12/2022, 10:38:24 PM', message: 'I did, I did taw a putty tat!'}
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }
    
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6"> 
          <div class="nav-bar">
            <NavBar/>
          </div>
          <div class="border-box">
            <CreatePost addNewPostEntry={addNewPost}/>
          </div>
          <div class="border-box">
            <DisplayPost parentPosts={posts}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;