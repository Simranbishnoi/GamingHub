import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import RockPaperScissors from './RockPaperScissors';
import BatBallStump from './BatBallStump';
import GuessNumber from './GuessNumber';
import ClickSpeed from './ClickSpeed';
import Navbar from './Navbar';

function App() {
  // Phase 8: Let's create some state at the top level and pass it down as props!
  const [username] = useState("ProGamer"); 

  return (
    <Router>
      <Navbar username={username} />
      <Routes>
        <Route path="/" element={<Dashboard username={username} />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/batball" element={<BatBallStump />} />
        <Route path="/guess" element={<GuessNumber />} />
        <Route path="/clickspeed" element={<ClickSpeed />} />
      </Routes>
    </Router>
  );
}

export default App;
