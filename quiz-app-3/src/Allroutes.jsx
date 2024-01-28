import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Quiz from './components/quiz/Quiz'
import questions from './resources/questions.json'
import Result from './components/results/Result'
import React, { useEffect } from 'react'

const Allroutes = () => {
  const [score, setScore] = React.useState(0)
  const [attempted, setAttempted] = React.useState(0)
  useEffect(() => {
    console.log(score)
    console.log(attempted, 'attempts')
  }, [score, attempted])
  return (
    <Routes>
        <Route path='/' element={<Home setScore={setScore} setAttempted={setAttempted}/>} />
        <Route path='/quiz' element={<Quiz setAttempted={setAttempted} questions={questions} setScore={setScore}/>} />
        <Route path='/result' element={<Result setAttempted={setAttempted} setScore={setScore} attempted={attempted} score={score}/>} />
    </Routes>
  
  )
}

export default Allroutes