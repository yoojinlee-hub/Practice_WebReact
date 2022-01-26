// HomeFilter 컴포넌트
import styles from './HomeFilter.module.css';

function HomeFilter({ filter, text, onClickFilter }) {
  return (
    <button
      className={filter === text ? styles.black : styles.gray}
      onClick={onClickFilter}
    >
      {text}
    </button>
  );
}

export default HomeFilter;