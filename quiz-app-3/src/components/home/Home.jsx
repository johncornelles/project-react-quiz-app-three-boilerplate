import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = ({ setAttempted, setScore }) => {
  return (
    <div className='home-div'>
      <h3 className='quiz-title'>Quiz App</h3>
      <Link to={'/quiz'}>
        <button onClick={() => {
          setAttempted(0)
          setScore(0)
        }} className='play-btn btn'>Play</button>
      </Link>
    </div>
  );
}

export default Home;