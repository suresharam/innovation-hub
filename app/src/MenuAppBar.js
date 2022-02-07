import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core//Box';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuEl, setMenuEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setMenuEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setMenuEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
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
          <Typography variant="h3" className="App-header" component="div" sx={{ flexGrow: 1 }}>
            Condenast Innovation Hub
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Ideas</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
} 
