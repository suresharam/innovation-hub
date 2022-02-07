import * as React from 'react';
import './App.css';
import MenuAppBar from './MenuAppBar';
import IdeaForm from './IdeaForm';

function App() {
  return (
    <div className="App">
      <header>
        <MenuAppBar />        
      </header>
      <IdeaForm />
    </div>
  );
}


export default App;
