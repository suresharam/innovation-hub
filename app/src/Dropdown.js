import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Dropdown() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: '20px' }}>
      <FormControl required>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value='technology'>Technology</MenuItem>
          <MenuItem value='digital'>Digital</MenuItem>
          <MenuItem value='brands'>Brands</MenuItem>
          <MenuItem value='tools'>Tools</MenuItem>
          <MenuItem value='Advertisement'>Advertisement</MenuItem>
          <MenuItem value='others'>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
