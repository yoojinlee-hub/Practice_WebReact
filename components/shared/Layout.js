// src/components/shared/Layout.js
import styles from './Layout.css';
import Header from './Header';
import Menu from './Menu';
import {useState} from 'react';

function Layout({ children, activeMenu }) {
  const [hideMenu, setHideMenu] = useState(false);
 
  const onClickHamburger = () => {
      setHideMenu((prev) => !prev);
    };
    
  return (
    <div className={styles.container}>
      <Header onClickHamburger={onClickHamburger} />
      <div className={styles.layout}>
      {hideMenu? <Menu activeMenu={activeMenu} />:<div></div>}  
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;