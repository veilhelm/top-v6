import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => {
        setPosts(data)
      })
  })

  return (
    <div className="App">
      {posts && posts.length > 0 && posts.map(post => {
        return (
          <div
            className="post"
            data-testid="post"
            key={post.id}
          >
            <h2>{post.title}</h2> 
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
