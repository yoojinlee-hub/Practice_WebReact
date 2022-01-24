// src/components/shared/Layout.js
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({children, activeMenu}){

    const [click, setClick] = useState(true);

    const onClickMenu = () =>{
        setClick(click => !click);
    }

    return(
        <div className={styles.container}>
            <Header onClickMenu={onClickMenu}/>
            <div className={styles.layout}>
                { click ? <Menu activeMenu={activeMenu}/> : null}
                <div className={styles.contents} style={!click ? {marginLeft : '0'} : null}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;