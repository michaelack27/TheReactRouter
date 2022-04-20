//import logo from './logo.svg';
import './App.css';
//import './Question.js'
import { useEffect } from 'react';
import WholeQ from './WholeQ.js'
import { useState } from 'react';

function App() {


  const question = [
    {"category":"Science: Computers", "type":"multiple","difficulty":"easy","question":"What is the domain name for the country Tuvalu?","correct_answer":".tv","incorrect_answers":[".tu",".tt",".tl"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In PROTOTYPE 2, which of the following abilities\/weapons is NOT obtained by an Evolved?","correct_answer":"Tendrils","incorrect_answers":["Blade","Bio-Bomb","Pack Leader"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
    }
    ]
  
    /*useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=3&type=multiple')
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.results))
      return response;
    }, []);*/

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    const handleCorrectAnswer = (isCorrect) => {
      const nextQuestion = currentQuestion + 1;
      const nextCorrectScore = correctScore + 1;
      if (nextQuestion < question.length){
      
        setCurrentQuestion(nextQuestion);
        setCorrectScore(nextCorrectScore);
      
      } else {
        //setCur;
        //figure out how to say quiz is over
      }
    }

    const handleWrongAnswer = (isWrong) =>{
      const nextQuestion = currentQuestion + 1;
      const nextIncorrectScore = incorrectScore + 1;
      if (nextQuestion < question.length){
      
        setCurrentQuestion(nextQuestion);
        setIncorrectScore(nextIncorrectScore);
      
      } else {
        //setCur;
        //figure out how to say quiz is over
      }
    }

    return (
     <div className='app'>
        
        <div className="questions">
          <h1>Question {currentQuestion + 1}</h1>
        </div>
        <div CorrectScore ='correct-score'>
              <h2>Correct Answers: {correctScore}</h2>
        </div>
        <div IncorrectScore ='Incorrect-score'>
              <h2>Incorrect Answers: {incorrectScore}</h2>
        </div>
        <div className='question-text'>
          {question[currentQuestion].question}</div>
        <div className = 'answer-buttons'>
          <button onClick={()=> handleCorrectAnswer()}>{question[currentQuestion].correct_answer}</button>
            {question[currentQuestion].incorrect_answers.map((wronganswers)=> (
              <button onClick={()=> handleWrongAnswer(wronganswers.isWrong)}>{wronganswers}</button>
            ))}
        
        </div>
        
        
        </div> 
            
       
      
  
  );
}

export default App;
