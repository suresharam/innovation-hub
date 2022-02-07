import * as React from 'react';
import './App.css';
import MenuAppBar from './MenuAppBar';
import IdeaForm from './IdeaForm';
import About from './About';
import {Grid, ListItem} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        <MenuAppBar />        
      </header>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ListItem>
            <h3>TO DO Navigation here</h3>
          </ListItem>
        </Grid>
        <Grid item xs={5}>
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
    </div>
  );
}


export default App;
