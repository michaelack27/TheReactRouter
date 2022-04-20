import {useState} from "react"
import Words from './Words.js'
function WholeQ(props){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return(

        //<p>
         // Question {currentQuestion+1}
        //  {Object.keys(props.quest).map((thequestion)=> <Words name={thequestion} more={props.quest[thequestion]} />)}
    //</p>

     <p>
         // Question {currentQuestion+1}
         
     </p>
    )
}

export default WholeQ;