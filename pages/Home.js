// src/pages/Home.js
import Layout from '../components/shared/Layout';
import styles from './pages.module.css';
import makeMargin from './pages.module.css';
function Home() {
  return (
    <Layout className={makeMargin.make_margin} activeMenu="home">
      <div>* 홈</div>
    </Layout>
  );
}

export default Home;