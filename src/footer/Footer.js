import * as React from 'react';
import {CardMedia, Grid, ListItem, List, 
  ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';
import {Work} from "@material-ui/icons";

export default function Footer() {
  return (
    <Grid className="Menu" container spacing={2}>
      <Grid item xs={4}>
        <ListItem>
        </ListItem>
      </Grid>
      <Grid item xs={2}>
        <ListItem>
          <CardMedia
            component="img"
            className="Footer-image"
            src="./InnovationHub.png"
            title="Condé Nast"
          />
        </ListItem>
      </Grid>
      <Grid className="App-profile" item xs={6}>
        <List sx={{ width: '100%', maxWidth: 200}}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Links to be added"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Links to be added"/>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
} 
