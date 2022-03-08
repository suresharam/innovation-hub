import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, IconButton, MenuItem, 
  Menu, CardMedia, useScrollTrigger} from '@material-ui/core';
import { Search, AccountCircle } from '@material-ui/icons';
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function MenuAppBar(props) {
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
      <ElevationScroll {...props}>
        <AppBar className="Menu">
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
          <IconButton size="medium" aria-label="search" color="inherit">
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
      </ElevationScroll>
    </Box>
  );
} 
