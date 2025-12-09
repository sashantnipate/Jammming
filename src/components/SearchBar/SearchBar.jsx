
function SearchBar(props){
    return(
        <div>
            <input placeholder="Enter a song, album, or artist"></input>
            <button onClick = {props.onSearchClick}>Search</button>
        </div>
    )
}

export default SearchBar;