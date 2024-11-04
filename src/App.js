import React from 'react';
import './App.css';

function App() {
  const name = "JeevanPrasath";
  const age = 23;

  return (
    <div className="App">
      <h1>Hello {name} ! Welcome to React !</h1>
      <h3>You are {age} years old.</h3>
    </div>
  );
}

export default App;
