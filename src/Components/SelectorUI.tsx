import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

export default function SelectorUI() {
  const [cityInput, setCityInput] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCityInput(event.target.value);
  };

  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="city-select-label">Ciudad</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-simple-select"
          value={cityInput}
          label="Ciudad"
          onChange={handleChange}>
          <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
          <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
          <MenuItem value={"quito"}>Quito</MenuItem>
          <MenuItem value={"manta"}>Manta</MenuItem>
          <MenuItem value={"cuenca"}>Cuenca</MenuItem>
        </Select>
      </FormControl>
      
      {cityInput && (
        <Typography sx={{ marginTop: 2 }}>
          Información del clima en <strong>{capitalizeFirstLetter(cityInput)}</strong>
        </Typography>
      )}
    </>
  )
}
