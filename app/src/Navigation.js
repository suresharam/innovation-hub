import * as React from 'react';
import {Box, Menu, MenuItem, MenuList, ListItemIcon, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DraftsIcon from '@material-ui/icons/Drafts';
import IconButton from '@material-ui/core/IconButton';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import SendIcon from '@material-ui/icons/Send';



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
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Hackathon</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PriorityHighIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Ideas</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>Categories</Typography>
                </MenuItem>
            </MenuList>
          </Menu>
    </Box>
  );
}
