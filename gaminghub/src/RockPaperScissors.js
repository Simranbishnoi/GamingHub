import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RockPaperScissors() {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [resultMessage, setResultMessage] = useState('Make your move!');

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissors';
      default: return 'rock';
    }
  }

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
      setResultMessage(`Tie!! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setHumanScore(prevScore => prevScore + 1);
      setResultMessage(`Yeeee, You win!! You chose ${humanChoice}, bot chose ${computerChoice}.`);
    } else {
      setComputerScore(prevScore => prevScore + 1);
      setResultMessage(`Shit Bot won this round. Bot chose ${computerChoice}, you chose ${humanChoice}.`);
    }
  }

  return (
    <div className="game-container">
      <h2>🪨📄✂️ Rock Paper Scissors</h2>
      
      <div className="scoreboard">
        <h3>Your Score: {humanScore} | Bot Score: {computerScore}</h3>
      </div>
      
      <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{resultMessage}</p>
      
      <div className="game-buttons">
        <button onClick={() => playRound('rock')}>Rock 🪨</button>
        <button onClick={() => playRound('paper')}>Paper 📄</button>
        <button onClick={() => playRound('scissors')}>Scissors ✂️</button>
      </div>
      
      <br/><br/>
      <Link to="/">
        <button>🔙 Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default RockPaperScissors;
