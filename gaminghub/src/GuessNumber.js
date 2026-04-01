import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GuessNumber() {
  // Generate random number between 1 and 100 on initial load
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100!');

  function handleGuess() {
    const guess = parseInt(userGuess, 10);
    
    if (isNaN(guess)) {
      setMessage('Please enter a valid number!');
      return;
    }

    if (guess === targetNumber) {
      setMessage(`🎉 Correct! The number was ${targetNumber}.`);
    } else if (guess > targetNumber) {
      setMessage('📈 Too high! Try again.');
    } else {
      setMessage('📉 Too low! Try again.');
    }
  }

  function handleRestart() {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setMessage('Guess a new number between 1 and 100!');
  }

  return (
    <div className="game-container">
      <h2>🔢 Guess the Number</h2>

      <p style={{ fontWeight: 'bold', fontSize: '18px', minHeight: '30px' }}>
        {message}
      </p>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="number" 
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter your guess"
          style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        />
        <button onClick={handleGuess} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Guess
        </button>
      </div>

      <button onClick={handleRestart} style={{ marginBottom: '20px' }}>
        Restart Game 🔄
      </button>

      <br/><br/>
      <Link to="/">
        <button>🔙 Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default GuessNumber;
