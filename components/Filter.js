// components/Filter.js
function Filter({ filter, text, onClickFilter }) {
    return (
      <button
        className={filter === text ? StyleSheet.black : StyleSheet.gray}
        onClick={onClickFilter}
      >
        {text}
      </button>
    );
  }
  
  export default Filter;