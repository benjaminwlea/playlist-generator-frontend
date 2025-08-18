
import { useState } from "react";

function Settings() {
  const [userInput, setUserInput] = useState({
    sourceIDs: "",
    nTracks: 30
  });

  return (
    <div>
      
      <div style={{display: "flex", gap:"1rem"}}>
        <div>
          <h3>Sources</h3>
          
          <form>
            <input
              placeholder="Playlist ID"
              value={userInput.sourceID}
              onChange={(e) => setUserInput({...userInput, sourceIDs: e.target.value})}
            />
          </form>
        </div>
        
        <div>
          <h3>User Settings</h3>
          <form>
            Number of tracks
            <input
              type="number"
              placeholder="Choose number of tracks to generate"
              value={userInput.nTracks}
              onChange={(e) => setUserInput({...userInput, nTracks: e.target.value})}
            />
          
          </form>
        </div>
        
      </div>
      <button>Generate playlist</button>
    </div>
  );
}

export default Settings;