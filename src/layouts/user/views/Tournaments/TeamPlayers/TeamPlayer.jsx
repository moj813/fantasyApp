import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TeamPlayers.css';


const TeamPlayer = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Sample player data
  const playersTeam1 = Array.from({ length: 15 }, (_, index) => ({ name: `Player ${index + 1}`, id: `team1-${index}` }));
  const playersTeam2 = Array.from({ length: 15 }, (_, index) => ({ name: `Player A${index + 1}`, id: `team2-${index}` }));

  const handlePlayerSelect = (player) => {
    const index = selectedPlayers.findIndex(selectedPlayer => selectedPlayer.id === player.id);
    if (index === -1) {
      if (selectedPlayers.length < 11) {
        setSelectedPlayers([...selectedPlayers, { ...player }]);
      } else {
        toast.warning("You can only select up to 11 players");
      }
    } else {
      const updatedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.id !== player.id);
      setSelectedPlayers(updatedPlayers);
    }
  };

  const handleSave = () => {
    if(selectedPlayers.length < 11){
      toast.warning("Please select at least 11 players");
    } else {
      // Create an array to store selected players
      const selectedPlayersArray = [];

      // Filter selected players from both teams and add them to the array
      playersTeam1.forEach(player => {
        if (selectedPlayers.find(selectedPlayer => selectedPlayer.id === player.id)) {
          selectedPlayersArray.push(player);
        }
      });

      playersTeam2.forEach(player => {
        if (selectedPlayers.find(selectedPlayer => selectedPlayer.id === player.id)) {
          selectedPlayersArray.push(player);
        }
      });

      // Do something with selectedPlayersArray, e.g., send it to the server
      console.log("Selected players:", selectedPlayersArray);

      // Show success toast
      toast.success("Selected players saved successfully");

      // Reset selectedPlayers after saving if needed
      setSelectedPlayers([]);
    }
  };

  return (
      <div className='testClass'>
    <div className="squad-container">
      <div className="team-section">
        <h2>Team 1</h2> 
        <div className="players-list">
          {playersTeam1.map((player, index) => (
            <div className="player" key={index}>
              <input
                type="checkbox"
                id={`team1-${index}`}
                className="customCheckBoxInput"
                checked={selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id)}
                onChange={() => handlePlayerSelect(player)}
              />
              <label htmlFor={`team1-${index}`} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                  <div className="inner">{player.name}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="team-section">
        <h2>Team 2</h2>
        <div className="players-list">
          {playersTeam2.map((player, index) => (
            <div className="player" key={index}>
              <input
                type="checkbox"
                id={`team2-${index}`}
                className="customCheckBoxInput"
                checked={selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id)}
                onChange={() => handlePlayerSelect(player)}
              />
              <label htmlFor={`team2-${index}`} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                  <div className="inner">{player.name}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="save-button-container">
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default TeamPlayer;
