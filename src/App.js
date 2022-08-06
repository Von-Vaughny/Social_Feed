import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import DisplayPost from './Components/DisplayPosts/DisplayPosts'


function App() {

  const [posts, setPosts] = useState([{name: 'Bugs Bunny', date: '11-07-2007', message: 'Eh, what’s up, doc?'}, {name: 
    'Elmer Fudd', date: '', message: 'Be vewy vewy quiet, I’m hunting wabbits!, He-e-e-e-e!'}]);

  return (
    <div>
      <h3>Social Feed</h3>
      <div>
        <CreatePost/>
        <DisplayPost posts = {posts}/>
      </div>
    </div>
  );
}

export default App;