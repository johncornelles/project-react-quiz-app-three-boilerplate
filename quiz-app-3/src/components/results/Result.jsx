import React from 'react';
import './result.css';
import { Link } from 'react-router-dom';

const Result = (props) => {
  let { score, attempted } = props
    const percentage = ((score / 15) * 100).toFixed(0);
    return (
        <>
            <h1 className='result-title'>Results</h1>
            <div className='result-div'>
                <h3 className='feedback'>Your result:</h3>
                <h1 className='score'>Your score is {percentage}%</h1>
                <div className='results'>
                    <div className='results-div'>
                        <p className='result no-question'>Total number of questions</p>
                        <p className='count'>15</p>
                    </div>
                    <div className='results-div'>
                        <p className='result no-question'>Number of attempted questions</p>
                        <p className='count'>{attempted}</p>
                    </div>
                    <div className='results-div'>
                        <p className='result no-question'>Number of correct answers</p>
                        <p className='count'>{score}</p>
                    </div>
                    <div className='results-div'>
                        <p className='result no-question'>Number of wrong answers</p>
                        <p className='count'>{attempted - score}</p>
                    </div>
                </div>
            </div>
            <div className='controls-back-play'>
                <Link to={'/quiz'}>
                    <button className='play-again'>Play Again</button>
                </Link>
                <Link to={'/'}>
                    <button className='back'>Back to home</button>
                </Link>
            </div>
        </>
    );
}

export default Result;