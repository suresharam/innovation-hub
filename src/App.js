import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Hackathon from './Hackathon/Hackathon';
import MyProfile from './MyProfile/MyProfile';
import MostLikedIdeas from './MostLikedIdeas/MostLikedIdeas';
import WYWIdeas from './WYWIdeas/WYWIdeas';
import MenuAppBar from './MenuAppBar';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <MenuAppBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/hackathon" element={<Hackathon/>} />
          <Route path="/myProfile" element={<MyProfile/>} />
          <Route path="/mostLikedIdeas" element={<MostLikedIdeas/>} />
          <Route path="/wywIdeas" element={<WYWIdeas/>} />
        </Routes>
      </div>
    </Router>
  );
}
