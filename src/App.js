import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// steps : 
// actionTypes => actions => Reducer => store
function App() {
  const { count, isVisible} = useSelector((state) => state);
  return (
    <div className="App">
      <h1> Counter : {count}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
