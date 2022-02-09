import * as React from 'react';
import './App.css';
import MenuAppBar from './MenuAppBar';
import IdeaForm from './IdeaForm';
import About from './About';
import IdeaCardGridContainer from './IdeaCardGridContainer';
import {Grid, ListItem, Typography, Button, Box} from '@material-ui/core';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header>
        <MenuAppBar />
      </header>
      <Grid className="Grid" container spacing={2}>
        <Grid item xs={1}>
          <ListItem>
            <Navigation />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <About />
          </ListItem>
        </Grid>
        <Grid item xs={5}>
          <ListItem>
            <IdeaForm />
          </ListItem>
        </Grid>
      </Grid>
      <Typography variant="h4" className="App__sub-section" >All Ideas</Typography>
      <IdeaCardGridContainer />
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


export default App;
