import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  function plusClick() {
      setNumber(number + 1);
  }
  function minusClick() {
    setNumber(number - 1);
  }
  function multiClick() {
    setNumber(number * 2);
  }

  return (
      <div>
          <div>값 : {number}</div>
          <button onClick={plusClick}>+1</button>
          <button onClick={minusClick}>-1</button>
          <button onClick={multiClick}>*2</button>
      </div>
  );
}

export default App;
