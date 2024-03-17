import './Squad.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { toast } from 'react-toastify';

const Squad = ({ teamA, teamB ,selectedPlayersTeamA,selectedPlayersTeamB,setSelectedPlayersTeamA,setSelectedPlayersTeamB }) => {
  // const [selectedPlayersTeamA, setSelectedPlayersTeamA] = useState([]);
  // const [selectedPlayersTeamB, setSelectedPlayersTeamB] = useState([]);

  const handlePlayerSelection = (playerId, playerName, teamId) => {
    let selectedPlayers;
    let setSelectedPlayers;
    let maxPlayers;
    if (teamId === 'teamA') {
      selectedPlayers = selectedPlayersTeamA;
      setSelectedPlayers = setSelectedPlayersTeamA;
      maxPlayers = 11;
    } else {
      selectedPlayers = selectedPlayersTeamB;
      setSelectedPlayers = setSelectedPlayersTeamB;
      maxPlayers = 11;
    }

    // Check if the maximum limit of players is reached for the team
    if (selectedPlayers.length === maxPlayers && !selectedPlayers.find(player => player.id === playerId)) {
      toast.error(`You can only select ${maxPlayers} players for ${teamId}.`);
      return;
    }

    // Check if the player is already selected, and toggle its selection
    const playerIndex = selectedPlayers.findIndex(player => player.id === playerId);
    if (playerIndex !== -1) {
      const updatedPlayers = [...selectedPlayers];
      updatedPlayers.splice(playerIndex, 1);
      setSelectedPlayers(updatedPlayers);
    } else {
      setSelectedPlayers([...selectedPlayers, {id: playerId }]);
    }
  };

  function submitHandler(){
    console.log("Team A",selectedPlayersTeamA)
    console.log("Team B",selectedPlayersTeamB)
  }

  return (
    <div className="squad-container">
      <div className="team-section">
        <h2>Team 1</h2>
        <div className="players-list">
          {teamA.map(player => (
            <FormControlLabel
              key={player._id}
              control={
                <Checkbox
                  checked={selectedPlayersTeamA.some(selectedPlayer => selectedPlayer.id === player._id)}
                  onChange={() => handlePlayerSelection(player._id, player.playerName, 'teamA')}
                />
              }
              label={<div className="player">{player.playerName}</div>}
            />
          ))}
        </div>
      </div>
      <div className="team-section">
        <h2>Team 2</h2>
        <div className="players-list">
          {teamB.map(player => (
            <FormControlLabel
              key={player._id}
              control={
                <Checkbox
                  checked={selectedPlayersTeamB.some(selectedPlayer => selectedPlayer.id === player._id)}
                  onChange={() => handlePlayerSelection(player._id, player.playerName, 'teamB')}
                />
              }
              label={<div className="player">{player.playerName}</div>}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Squad;
