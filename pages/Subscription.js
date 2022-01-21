// src/pages/Subscription.js
import Layout from '../components/shared/Layout';
import styles from './pages.module.css';
import makeMargin from './pages.module.css';
function Subscription() {
  return (
    <Layout className={makeMargin.make_margin} activeMenu="subscription">
      <div>* 구독</div>
    </Layout>
  );
}

export default Subscription;