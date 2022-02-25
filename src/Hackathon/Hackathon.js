import Header from './Header';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import {Grid, ListItem, Typography} from '@material-ui/core';

function Hackathon() {
    return (
      <Grid className="Grid Hackathon" container spacing={2}>
          <Grid item xs={2}>
            <ListItem>
            </ListItem>
          </Grid>
          <Grid item xs={8}>
            <ListItem>
              <Header />
            </ListItem>
          </Grid>
          <Grid item xs={2}>
            <ListItem>
            </ListItem>
          </Grid>
          <Grid item xs={4}>
            <ListItem>
            </ListItem>
          </Grid>
          <Grid item xs={4}>
            <SwipeableTextMobileStepper />
          </Grid>
          <Grid item xs={12}>
           <Typography variant="h4" className="App__sub-section" >Hackathon Ideas</Typography>
          </Grid>
        </Grid>
    );
  }

export default Hackathon;