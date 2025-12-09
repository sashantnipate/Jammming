import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        placeholder="Enter a song, album, or artist"
      />
      <button
        className={styles.searchButton}
        onClick={props.onSearchClick}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
