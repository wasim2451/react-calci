import { useState, useEffect } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Display from './Components/Display'
import Keyboard from './Components/Keyboard'
function App() {
  const [expression, setExpression] = useState([])//Empty Array
  const [question, setQuestion] = useState("Q")
  const [answer, setAnswer] = useState(". . .")
  const[error,setError]=useState("")
  function Calculate(val) {
    let emptyArr = []
    if (val === 'C') {
      console.log("Clearing Console")
      setExpression([])
      setQuestion(() => {
        return "Q"
      })
      setAnswer(". . .")
      //Clearing Console
    }
    if (val === 'DEL') {
      setExpression((prevExp) => {
        return prevExp.slice(0, -1); // Remove the last element
      })
      setQuestion((prevQuestion) => {
        // Use a functional update to ensure you work with the latest state
        return prevQuestion.length > 1 ? prevQuestion.slice(0, -1) : "Q";
      });
    }
    if (val !== '=' && val !== 'DEL' && val !== 'C') {
      console.log(val)
      setExpression((prevExp) => {
        return[
          ...prevExp,
          val
        ]
      })
      console.log(expression)
      setQuestion((prevQuestion) => prevQuestion === "Q" ? val : prevQuestion + val);
      console.log(question)
    }
    if (val === '=') {
      function calculateExpression(question) {
        try {
          return eval(question);
        } catch (error) {
          return ("ERROR")
        }
      }
      setAnswer(()=>{
        return calculateExpression(question)
      })
    }
  }

  return (
    <>
      <div className='main-div'>
        <Banner />
        <Display question={question} answer={answer} />
        <Keyboard calculation={Calculate} />
      </div>
    </>
  )
}

export default App
