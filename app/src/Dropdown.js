import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Dropdown({label, isRequired = false, options = []}) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: '20px' }}>
      <FormControl required={isRequired}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={label}
          onChange={handleChange}
        >
        {options.map((item) => {
            return (
            <MenuItem value={item.value}>{item.text}</MenuItem>
            );
        })}
        </Select>
      </FormControl>
    </Box>
  );
}
