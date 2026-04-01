import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BatBallStump() {
  const [resultMessage, setResultMessage] = useState('Hit the pitch!');

  function playGame(userChoice) {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    // Computer chooses based on random number
    if (randomNumber < 1 && randomNumber >= 0) {
      computerChoice = 'bat';
    } else if (randomNumber < 2 && randomNumber >= 1) {
      computerChoice = 'ball';
    } else {
      computerChoice = 'stump';
    }

    // Determine the result based on the user's HTML logic
    let result;
    if (userChoice === 'bat') {
      if (computerChoice === 'bat') result = 'Match Draw';
      else if (computerChoice === 'ball') result = 'You Win';
      else result = 'Computer Wins';
    } else if (userChoice === 'ball') {
      if (computerChoice === 'bat') result = 'Computer Wins';
      else if (computerChoice === 'ball') result = 'Match Draw';
      else result = 'You Win';
    } else {
      // user selected stump
      if (computerChoice === 'bat') result = 'You Win';
      else if (computerChoice === 'ball') result = 'Computer Wins';
      else result = 'Match Draw';
    }

    // Replace the raw alert() with React State update
    setResultMessage(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}!`);
  }

  return (
    <div className="game-container">
      <h2>🏏 Bat, Ball, Stump</h2>
      
      <p style={{ fontWeight: 'bold', fontSize: '18px', minHeight: '30px' }}>
        {resultMessage}
      </p>

      <div className="game-buttons">
        <button onClick={() => playGame('bat')}>Bat 🏏</button>
        <button onClick={() => playGame('ball')}>Ball ⚾</button>
        <button onClick={() => playGame('stump')}>Stump 🎋</button>
      </div>

      <br/><br/>
      <Link to="/">
        <button>🔙 Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default BatBallStump;
