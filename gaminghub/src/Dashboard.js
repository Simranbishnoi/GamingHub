import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Just using the global styles we created for now

function Dashboard({ username }) {
  return (
    <div className="dashboard-container">
      <h2>🎮 Welcome to React Gaming Hub, {username}!</h2>
      <p>Select a game to play:</p>
      
      <div className="game-links">
        <Link to="/rps">
          <button className="game-btn">🪨📄✂️ Rock Paper Scissors</button>
        </Link>
        <br/><br/>
        
        <Link to="/batball">
          <button className="game-btn">🏏 Bat Ball Stump</button>
        </Link>
        <br/><br/>
        
        <Link to="/guess">
          <button className="game-btn">🔢 Guess the Number</button>
        </Link>
        <br/><br/>

        <Link to="/clickspeed">
          <button className="game-btn">⏱️ Click Speed Test</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
