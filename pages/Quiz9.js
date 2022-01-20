// src/App.js
import {useState} from 'react';
import styles from "./ColorChange.module.css";
import Layout from '../components/shared/Layout';
import makeMargin from './pages.module.css';

function Quiz9() {

  const [check,useCheck]=useState(false);

  function Onclick(){
    useCheck(check=>!check)
  }

  return (
    <Layout>
      <div className={makeMargin.make_margin}>
        {check?
          <div className={styles.ifCheck}>♥</div>: <div className={styles.ifNoCheck}>♡</div>
        }
        <button onClick={Onclick}>Liked</button>
      </div>
    </Layout>  
    
  );
}

export default Quiz9;