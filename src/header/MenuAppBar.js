import * as React from 'react';
import {
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CardMedia from '@material-ui/core/CardMedia';
import {Search} from '@material-ui/icons';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Hackathon',
      path: '/hackathon'
    },
    {
      name: 'Gem Recordings',
      path: '/gemRecordings'
    },
    {
      name: 'WYW Ideas',
      path: '/wywIdeas'
    }
  ]

  return (
    <Box sx={{ flexGrow: 1 }} className="MenuAppBar__box">
      <Typography variant="h3" className="App-header" component="div" sx={{ flexGrow: 1 }}>
            GPT HUB
      </Typography>
      <AppBar className="Menu" position="static">
        <Toolbar>
          <CardMedia
              component="img"
              className="MenuAppBar__card-media"
              src="./conde-nast-logo.png"
              title="Condé Nast"
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                className="MenuAppBar__button"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >                
                <Link to={page.path}>{page.name}</Link>
              </Button>
            ))}
          </Box>
          <IconButton size="large" aria-label="search" color="inherit">
            <Search />
          </IconButton>
          {auth && (
            <div>
              <IconButton
                size="medium"
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
                <MenuItem onClick={handleClose}>
                  <Link to="/myProfile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>My Ideas</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
} 
