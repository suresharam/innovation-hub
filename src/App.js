import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './home/Home';
import Hackathon from './hackathon/Hackathon';
import MyProfile from './my-profile/MyProfile';
import MostLikedIdeas from './gem-recordings/GemRecordings';
import WYWIdeas from './wyw-ideas/WYWIdeas';
import MenuAppBar from './header/MenuAppBar';
import Footer from './footer/Footer';


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
          <Route path="/gemRecordings" element={<MostLikedIdeas/>} />
          <Route path="/wywIdeas" element={<WYWIdeas/>} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
