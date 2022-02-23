import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="MenuAppBar__box">
      <Typography variant="h3" className="App-header" component="div" sx={{ flexGrow: 1 }}>
            FOOTER
      </Typography>
    </Box>
  );
} 
