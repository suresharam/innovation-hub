import IdeaForm from './IdeaForm';
import About from './About';
import IdeaCardGridContainer from './IdeaCardGridContainer';
import {Grid, ListItem, Typography, Button, Box} from '@material-ui/core';

function Home() {
    return (
      <div className="App">
        <Grid className="Grid" container spacing={2}>
          <Grid item xs={6}>
            <ListItem>
              <About />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <IdeaForm />
            </ListItem>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" className="App__sub-section" >Hackathon</Typography>
          </Grid>
          <Grid item xs={12}>
            <IdeaCardGridContainer />
          </Grid>
        </Grid>
        <Box
          sx={{
            margin: '20px',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            '& button': { m: 1 }
          }}
        >
          <Button variant="contained" size="large">See more Ideas</Button>
        </Box>      
      </div>
    );
}

export default Home;