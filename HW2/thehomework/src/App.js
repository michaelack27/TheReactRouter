//import logo from './logo.svg';
import './App.css';
//import './Question.js'
import { useEffect } from 'react';
//import WholeQ from './WholeQ.js'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { cloneElement } from 'react';
//import TextField from "@material-ui/core/TextField";
var q1 = "";

function App() {

  const question = [
    {"category":"Science: Computers", "type":"multiple","difficulty":"easy","question":"What is the domain name for the country Tuvalu?","correct_answer":".tv","incorrect_answers":[".tu",".tt",".tl"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In PROTOTYPE 2, which of the following abilities\/weapons is NOT obtained by an Evolved?","correct_answer":"Tendrils","incorrect_answers":["Blade","Bio-Bomb","Pack Leader"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
    },
    ]
  

  const [data, setData] = useState(null);

 

   useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(response => response.json())
      .then(setData);
   }, []);

   //console.log(data.results[0].question);
   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    const handleCorrectAnswer = (isCorrect) => {
      const nextQuestion = currentQuestion + 1;
      const nextCorrectScore = correctScore + 1;
      if (nextQuestion < 10){
      
        setCurrentQuestion(nextQuestion);
        setCorrectScore(nextCorrectScore);
      
      } else {
        //figure out how to say quiz is over
      }
    }
    
    

    const handleWrongAnswer = (isWrong) =>{
      const nextQuestion = currentQuestion + 1;
      const nextIncorrectScore = incorrectScore + 1;
      if (nextQuestion < 10){
      
        setCurrentQuestion(nextQuestion);
        setIncorrectScore(nextIncorrectScore);
      
      } else {
        //setCur;
        //figure out how to say quiz is over
      }
    }

    if (data){
      if(((currentQuestion+1) % 2) == 0){
        return(
          <div className='app'>
          
          
          
          <div className="questions">
            <h2 style={{color:"white"}}>Question #{currentQuestion + 1}</h2>
          </div>
          <div className ='correct-score'>
                <h3 style={{color:"green"}}>Correct Answers: {correctScore}</h3>
          </div>
          <div className ='Incorrect-score'>
                <h3 style={{color:"red"}}>Incorrect Answers: {incorrectScore}</h3>
          </div>
          <div className='question-text'>
            <h1 style={{font:"Times"}}>{data.results[currentQuestion].question}</h1>
            </div>
          <div className = 'answer-buttons'>
            
              {data.results[currentQuestion].incorrect_answers.map((wronganswers)=> (
                <Button variant="contained" size="large" onClick={()=> handleWrongAnswer(wronganswers.isWrong)}>{wronganswers}</Button>
              ))}
            <Button variant="contained" size="large" onClick={()=> handleCorrectAnswer()}>{data.results[currentQuestion].correct_answer}</Button>
          
          </div>
          
          
          </div> 
              
         
        
    
        )  
      }else{
      return(
        <div className='app'>
        
        
        
        <div className="questions">
          <h2 style={{color:"white"}}>Question #{currentQuestion + 1}</h2>
        </div>
        <div className ='correct-score'>
              <h3 style={{color:"green"}}>Correct Answers: {correctScore}</h3>
        </div>
        <div className ='Incorrect-score'>
              <h3 style={{color:"red"}}>Incorrect Answers: {incorrectScore}</h3>
        </div>
        <div className='question-text'>
          <h1 style={{font:"Times"}}>{data.results[currentQuestion].question}</h1>
          </div>
        <div className = 'answer-buttons'>
          <Button variant="contained" size="large" onClick={()=> handleCorrectAnswer()}>{data.results[currentQuestion].correct_answer}</Button>
            {data.results[currentQuestion].incorrect_answers.map((wronganswers)=> (
              <Button variant="contained" size="large" onClick={()=> handleWrongAnswer(wronganswers.isWrong)}>{wronganswers}</Button>
            ))}
        
        </div>
        
        
        </div> 
            
       
      
  
      )}
    }else{
      return(
        <h1>Loading...</h1>
      )
    }
  

    
}

export default App;
