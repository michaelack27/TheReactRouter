import logo from './logo.svg';
import './App.css';
//import './Question.js'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const question = [
    {"category":"Science: Computers", "type":"multiple","difficulty":"easy","question":"What is the domain name for the country Tuvalu?","correct_answer":".tv","incorrect_answers":[".tu",".tt",".tl"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In PROTOTYPE 2, which of the following abilities\/weapons is NOT obtained by an Evolved?","correct_answer":"Tendrils","incorrect_answers":["Blade","Bio-Bomb","Pack Leader"]
    },
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
    }
    ]
  
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
      <div className='app'>
        <div className="questions">
          <span>Question 1</span>
        </div>
        <div className='question-text'>{question[currentQuestion].question}</div>
        <div className = 'answer-buttons'>
          <button>{question[currentQuestion].correct_answer}</button>
            {question[currentQuestion].incorrect_answers.map((wronganswers)=> (
              <button>{wronganswers}</button>
            ))}
          
        </div>
        
        </div>

  
  );
}

export default App;
