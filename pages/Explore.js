// src/pages/Explore.js
import Layout from '../components/shared/Layout';
import styles from './pages.module.css';
import makeMargin from './pages.module.css';
function Explore() {
  return (
    <Layout className={makeMargin.make_margin} activeMenu="explore">
      <div>* 탐색</div>
    </Layout>
  );
}

export default Explore;