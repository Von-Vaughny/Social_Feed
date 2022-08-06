import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import DisplayPost from './Components/DisplayPosts/DisplayPosts'


function App() {

  const [posts, setPosts] = useState([
    {name: 'Bugs Bunny', date: '11/7/2020, 12:35:42 PM', message: 'Eh, what’s up, doc?'}, 
    {name: 'Elmer Fudd', date: '5/23/2021, 11:22:34 AM', message: 'Come over here you scwewy wabbit.'}
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts)
  }
    
  return (
    <div>
      <h3>Social Feed</h3>
      <div>
        <CreatePost addNewPostEntry={addNewPost}/>
        <DisplayPost parentPosts={posts}/>
      </div>
    </div>
  );
}

export default App;