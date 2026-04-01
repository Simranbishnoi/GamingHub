import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import RockPaperScissors from './RockPaperScissors';
import BatBallStump from './BatBallStump';
import GuessNumber from './GuessNumber';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/batball" element={<BatBallStump />} />
        <Route path="/guess" element={<GuessNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
