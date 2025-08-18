import { useState } from "react";


function GeneratedPlaylist() {
  const [playlist, setPlaylist] = useState({
    name:"Name of playlist",
    link:"Link to (preferably) Spotify playlist",
    tracklist: [
      {artist: "Artist 1", track: "Track 1"},
      {artist: "Artist 2", track: "Track 2"},
      {artist: "Artist 3", track: "Track 3"},
    ]
  });

  return (
     <div>
      <h3>Generated Playlist</h3>
      <div>Name: {playlist.name}</div>
      <div>Link: {playlist.link}</div>
      <ol>
        {playlist.tracklist.map(track => (
          <li>
            {track.track} by {track.artist} 
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GeneratedPlaylist;