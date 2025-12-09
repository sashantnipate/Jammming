
function Track({track}) {
  return (
    <div className = "track">
      <h2>{track.name}</h2>
      <p>{track.artist} || {track.album}</p>
    </div>
  );
}


export default Track;
