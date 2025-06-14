import { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter() {

  const [count, setCount] = useState(() => {
    // Load saved count from localStorage
    const saved = localStorage.getItem('counter');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [nightMode, setNightMode] = useState(() => {
    const saved = localStorage.getItem('nightMode');
    return saved === 'true';
  });

  const handleClickAnywhere = () => {
    setCount(prev => prev + 1);
  };

  const resetCounter = (e) => {
    e.stopPropagation();
    setCount(0);
  };

  const toggleNightMode = (e) => {
    e.stopPropagation();
    setNightMode(prev => !prev);
  };

  // Save count to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  // Save nightMode preference
  useEffect(() => {
    localStorage.setItem('nightMode', nightMode.toString());
  }, [nightMode]);

  return (
    <div
      className={`container ${nightMode ? 'night' : ''}`}
      onClick={handleClickAnywhere}
    >
      <div className="topButtons">
        <button className="resetButton" onClick={resetCounter}>Reset</button>
        <button className="homeButton" onClick={toggleNightMode}>
          {nightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
      <h1 className="counterText">{count}</h1>
    </div>
  );
}
