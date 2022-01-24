// src/components/shared/ContentsLayout.js
import styles from './ContentsLayout.module.css';

function ContentsLayout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default ContentsLayout;
