import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClickSpeed() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // The useEffect Hook to handle our timer countdown!
  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setIsGameOver(true);
    }
    
    // Cleanup the interval when the component unmounts or state changes
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  function handleStart() {
    setScore(0);
    setTimeLeft(5);
    setIsPlaying(true);
    setIsGameOver(false);
  }

  function handleClick() {
    if (isPlaying) {
      setScore((prev) => prev + 1);
    }
  }

  return (
    <div className="game-container">
      <h2>⏱️ Click Speed Test</h2>
      
      {!isPlaying && !isGameOver && (
        <button onClick={handleStart} style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
          Start 5-Second Test!
        </button>
      )}

      {isPlaying && (
        <div>
          <h3 style={{ color: 'red' }}>Time Left: {timeLeft}s</h3>
          <button 
            onClick={handleClick} 
            style={{ padding: '40px 80px', fontSize: '24px', cursor: 'pointer', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '10px' }}>
            CLICK FAST!
          </button>
        </div>
      )}

      {isGameOver && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: 'green' }}>Time's Up!</h3>
          <p style={{ fontSize: '22px', fontWeight: 'bold' }}>You clicked {score} times in 5 seconds!</p>
          <p>That's {(score / 5).toFixed(1)} clicks per second!</p>
          <button onClick={handleStart} style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
            Try Again 🔄
          </button>
        </div>
      )}

      <br/><br/><br/>
      <Link to="/">
        <button style={{ cursor: 'pointer' }}>🔙 Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default ClickSpeed;
