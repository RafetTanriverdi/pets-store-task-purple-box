import React, { useContext } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { StoreContext } from '../Context/StoreContext';
import data from '../Data/status.json';

function StoreSelected() {
  const { setvalue } = useContext(StoreContext);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div >
      <FormControl sx={{ m: 1, minWidth: 120 ,Height:5}}>
        <Select onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue="pending">
          {data.map((item) => (
            <MenuItem  key={item.id} value={item.name}>
              {item.name.toLocaleUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default StoreSelected;
