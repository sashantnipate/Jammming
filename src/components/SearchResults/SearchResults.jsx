import Track from "../Track/Track";
import React from 'react';
function SearchResults(props){
    console.log(props.searchResults);
    if (props.searchResults.length === 0){
        console.log("Not result yet");
    }
    return(
        <div>
            <h2>Search Result</h2>
            {props.searchResults.map(track =>
            <Track key = {track.id} track = {track}/>)}
        </div>
    );
}

export default SearchResults;