// src/App.js
import Layout from './components/shared/Layout';
import React from 'react';
import {useState} from 'react';
import styles from "./ColorChange.module.css";

function App() {

  const [check,useCheck]=useState(false);

  function Onclick(){
    useCheck(check=>!check)
  }

  return (
    <Layout>
        {check?
          <div className={styles.ifCheck}>♥</div>: <div className={styles.ifNoCheck}>♡</div>
        }
        <button onClick={Onclick}>Liked</button>
    </Layout>  
    
  );
}

export default App;