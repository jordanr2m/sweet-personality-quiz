import "../App.css";
import { Results } from "../helpers/Results";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function EndScreen() {
    const { userName, score, setScore, setGameState } = useContext(GameStateContext);
    
    // Determine Personality result
    let finalResult;
    if (score <= 10) {
        finalResult = 0; // lollipop
    } else if ((score > 10) && (score <= 15)) {
        finalResult = 1; // liquorice
    } else if ((score > 15) && (score <= 24)) {
        finalResult = 2; // chocolate
    } else if ((score > 24) && (score <= 28)) {
        finalResult = 3; // gumdrop
    }

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className="EndScreen">
            <h2>Quiz Complete!</h2>
            <div className="resultsWrapper">
                <h3>{userName.length === 0 ? "Quiz taker" : userName}, your Result is: <span>{Results[finalResult].name}</span></h3>
                <p>About Your Type:</p>
                <p className="description">{Results[finalResult].description}</p>
                <img className="resultsImg" 
                    src={Results[finalResult].img} 
                    alt={Results[finalResult].alt}>
                </img>
            </div>
            
            {/* {score} */}
            <button className="restartBtn" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;