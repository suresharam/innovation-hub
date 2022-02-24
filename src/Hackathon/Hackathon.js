import {Grid, ListItem, Typography} from '@material-ui/core';

function Hackathon() {
    return (
      <Grid className="Grid" container spacing={2}>
          <Grid item xs={6}>
            <ListItem>
              hi
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              hi
            </ListItem>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" className="App__sub-section" >Hackathon</Typography>
          </Grid>
          <Grid item xs={12}>
            hi
          </Grid>
        </Grid>
    );
  }

export default Hackathon;