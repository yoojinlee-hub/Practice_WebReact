import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import Gugu from './Gugu';
import Layout from './Layout';

function App() {
  const [number, setNumber] = useState(0);

  function onClickIncrease() {
    setNumber(number + 1);
  }
  function onClickDecrease() {
    setNumber(number - 1);
  }
  function onClickMultiply() {
    setNumber(number * 2);
  }

  return (
      <Layout>
        <div>값 :{number}
          <Gugu>
            {number}
          </Gugu>
        </div>
        <Button onClick={onClickIncrease} text="+1" />
        <Button onClick={onClickDecrease} text="-1" />
        <Button onClick={onClickMultiply} text="*2" />
      </Layout>
  );
}

export default App;
