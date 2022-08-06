import React, { useState } from 'react';
import Post from './Components/Post/Post'


function App() {

  const [posts, setPosts] = useState([{name: 'Bugs Bunny', date: '11-07-2007', message: 'Eh, what’s up, doc?'}, {name: 
    'Elmer Fudd', date: '', message: 'Be vewy vewy quiet, I’m hunting wabbits!, He-e-e-e-e!'}]);

  return (
    <div className="App">
      <h3>Social Feed</h3>
      <Post parentPosts = {posts}></Post>
    </div>
  );
}

export default App;
