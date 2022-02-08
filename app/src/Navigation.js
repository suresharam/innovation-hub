import * as React from 'react';
import {Box} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';


export default function Navigation() {
    const [menuEl, setMenuEl] = React.useState(null);

    const handleMenu = (event) => {
        setMenuEl(event.currentTarget);
      };

    const handleCloseMenu = () => {
    setMenuEl(null);
    };

  return (
    <Box sx={{ minWidth: 100, marginTop: '10px' }}> 
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="hamburger-menu-appbar"
            aria-haspopup="true"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />            
          </IconButton>
          <Menu
            id="hamburger-menu-appbar"
            anchorEl={menuEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(menuEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>2022 Hackathon Ideas</MenuItem>
            <MenuItem onClick={handleCloseMenu}>2022 Hackathon Ideas</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Most Liked Ideas</MenuItem>
          </Menu>
    </Box>
  );
}
