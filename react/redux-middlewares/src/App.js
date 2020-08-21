import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPosts } from './store/postsReducer';

// function App({ getPosts }) {
function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsReducer.posts)
  const loading = useSelector(state => state.postsReducer.loading)
  const error = useSelector(state => state.postsReducer.error)

  useEffect(() => {
    // getPosts();
    dispatch(getPosts());
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Ups! Something went wrong!</p>;
  return (
    <div className="App">
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}

// const mapDispatchToProps = {
//   getPosts,
// };

export default App;
