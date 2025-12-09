import React, { useState } from "react";
import "./App.css";               
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const fakeTrack = [
    { id: "1", name: "Song A", artist: "Artist A", album: "Album A" },
    { id: "2", name: "Song B", artist: "Artist B", album: "Album B" }
  ];

  function handleSearch() {
    setSearchResults(fakeTrack);
  }

  return (
    <div className="app-container">
      <h1>Jammming</h1>
      <SearchBar onSearchClick={handleSearch} className = "search-bar"/>
      <SearchResults searchResults={searchResults} />
      <Playlist />
    </div>
  );
}

export default App;
