import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
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
          <label htmlFor="file">File</label> 
          <input 
            type="file"
            name="file"
            id="file"
            accept="image/*"
            onChange={handleChange}
          />
        </fieldset> 
      </form> 
      {image && (
        <img src={image} alt="" />
      )}
  </div>
  ); 
}

export default App;
