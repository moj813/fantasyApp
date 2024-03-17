import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Dataviewplayer from './Dataviewplayer';

const Test = ({players}) => {

    const [selectedPlayers, setSelectedPlayers] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSelectedPlayers({
      ...selectedPlayers,
      [name]: checked,
    });
  };


  return (
    <Box>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          {players.map((player) => (
            <FormControlLabel
              key={player._id}
              control={<Checkbox checked={selectedPlayers[player._id]} onChange={handleChange} name={player._id} />}
              label={<Dataviewplayer data={player} />} // Render your custom component here
            />
          ))}
        </FormGroup>
        <FormHelperText>Select players</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default Test


