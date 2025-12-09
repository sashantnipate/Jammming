import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import React , {useState} from 'react';

function App(){
  const [searchResults, setSearchResults] = useState([]);

  const fackTrack = [
    {id:"1", name:"Song A", artist: "Artist A", album: "Album A"},
    {id:"2", name:"Song B", artist: "Artist B", album: "Album B"}
  ];

  function handleSearch(){
    setSearchResults(fackTrack);
  }

  return(
    <>
      <h1>Jammming</h1>
      <SearchBar onSearchClick = {handleSearch}/>
      <SearchResults searchResults = {searchResults}/>
      <Playlist/>
    </>
  );
}

export default App;