// src/App.js
import Layout from './components/shared/Layout';
import React from 'react';
import {useState} from 'react';

function App() {

  const [check,useCheck]=useState(false);

  function Onclick(){
    useCheck(check=>!check)//클릭때마다 ! not 실행
  }

  return (
    <Layout>
      <div>
        <button onClick={Onclick}>Liked</button>
        {check && <div>♥</div>}
        {!check && " "}
      </div>
    </Layout>  
    
  );
}

export default App;