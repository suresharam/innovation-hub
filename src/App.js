import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Hackathon from './Hackathon/Hackathon';
import MyProfile from './MyProfile/MyProfile';
import MenuAppBar from './MenuAppBar';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <MenuAppBar />
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hackathon">Hackathon</Link>
          </li>
          <li>
            <Link to="/myProfile">My Profile</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/hackathon" element={<Hackathon/>} />
          <Route path="/myProfile" element={<MyProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}
