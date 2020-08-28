import React, { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append('username', username);
    if (file) {
      data.append('file', file, file.name)
    }
    
    axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/',
      data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = e => setImage(e.target.result);
    reader.readAsDataURL(file)
  }

  function handleChange(e) {
    setFile(e.target.files[0])
    readFile(e.target.files[0])
  }

  return (
    <div className="App"> 
      <form onSubmit={handleSubmit}> 
        <fieldset> 
          <label htmlFor="username">Username</label> 
          <input 
            type="username"
            name="username"
            id="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </fieldset> 
        <fieldset> 
          <label htmlFor="file">File</label> 
          <input 
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </fieldset>
        <button>Enviar</button>
      </form> 
      {image && (
        <img src={image} alt="" />
      )}
  </div>
  ); 
}

export default App;
