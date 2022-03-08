import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hackathon from "./components/Hackathon/Hackathon";
import MyProfile from "./components/my-profile/MyProfile";
import GemRecordings from "./components/gem-recordings/GemRecordings";
import WYWIdeas from "./components/wyw-ideas/WYWIdeas";
import MenuAppBar from "./components/header/MenuAppBar";
import Footer from "./components/footer/Footer";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <MenuAppBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/gemRecordings" element={<GemRecordings />} />
          <Route path="/wywIdeas" element={<WYWIdeas />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
