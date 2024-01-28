import React, { useEffect, useState } from 'react';
import './quiz.css';
import { Link } from 'react-router-dom';

const Quiz = (props) => {
    const [qno, setQno] = useState(0);
    const { questions, setScore, setAttempted } = props;
    const [answers, setAnswers] = useState(new Array(questions.length).fill(''));

    useEffect(() => {
        if (qno === 0) {
            setScore(0);
            setAttempted(0);
        }
    }, []);

    const next = () => {
        if (qno < questions.length - 1) {
            setQno(qno + 1);
        }
    };

    const previous = () => {
        if (qno > 0) {
            setQno(qno - 1);
        }
    };

    const updateAnswer = (answer, correctAnswer) => {
        let newAnswer = [...answers];
        newAnswer[qno] = answer;

        if (answer === correctAnswer && answers[qno] !== correctAnswer) {
            setScore(prev => prev + 1);
        } else if (answer !== correctAnswer && answers[qno] === correctAnswer) {
            setScore(prev => prev - 1);
        }
        setAnswers(newAnswer);

        if (newAnswer[qno] !== '') {
            setAttempted(prev => prev < 15 && prev + 1);
        }

        alert(`You got it ${answer === correctAnswer ? 'right' : 'wrong'}`);
        next();
    };

    const quit = () => {
        alert('Are you sure you want to quit ?');
    };

    const renderButton = (option, no) => {
        return (
            qno === 14 ? (
                <Link to={"/result"}>
                    <button onClick={() => updateAnswer(questions[qno][option], questions[qno].answer)} className={`answer${no} answer`}>{questions[qno][option]}</button>
                </Link>
            ) : (
                <button onClick={() => updateAnswer(questions[qno][option], questions[qno].answer)} className={`answer${no} answer`}>{questions[qno][option]}</button>
            )
        );
    };

    return (
        <div className="quiz-div">
            <h1>Question</h1>
            <p className="question-number">{qno + 1} of {questions.length}</p>
            <p className="question">{questions[qno].question}</p>
            <div className="answers">
                {renderButton('optionA', '1')}
                {renderButton('optionB', '2')}
                {renderButton('optionC', '3')}
                {renderButton('optionD', '4')}
            </div>
            <div className="controls">
                <button className="control previous" onClick={previous}>previous</button>
                {
                   qno !== 14 && <button className="control next" onClick={next}>next</button>
                }
                <button className="control quit" onClick={quit}>quit</button>
                <Link to={"/result"}>
                    <button className="control finish">finish</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;