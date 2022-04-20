import {useState} from "react"
function Words(props){
    
    const question = [
        {"category":"Science: Computers", "type":"multiple","difficulty":"easy","question":"What is the domain name for the country Tuvalu?","correct_answer":".tv","incorrect_answers":[".tu",".tt",".tl"]
        },
        {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In PROTOTYPE 2, which of the following abilities\/weapons is NOT obtained by an Evolved?","correct_answer":"Tendrils","incorrect_answers":["Blade","Bio-Bomb","Pack Leader"]
        },
        {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Need for Speed: Most Wanted (2005), what was the name of the main antagonist?","correct_answer":"Clarence &quot;Razor&quot; Callahan","incorrect_answers":["Hector &quot;Ming&quot; Domingo","Toru &quot;Bull&quot; Sato","Karl &quot;Baron&quot; Smit"]
        }
        ]
        
    const [theQuestion, setTheQuestion] = useState(0);
    return(
    
        <p>{question[theQuestion].question}</p>
    );

}

export default Words;