import "../App.css";
import { useState, useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';
import { Questions } from "../helpers/Questions";

function Quiz() {
    const { setGameState, score, setScore } = useContext(GameStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    // Grab the user's answer
    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    const checkAnswer = () => {
        if (optionChosen === "lollipop") {
            setScore(score + 1)
        } 
        if (optionChosen === "licorice") {
            setScore(score + 2)
        } 
        if (optionChosen === "chocolate") {
            setScore(score + 3)
        } 
        if (optionChosen === "gumdrop") {
            setScore(score + 4)
        }
    }

    const nextQuestion = () => {
        checkAnswer();
        // Set option to empty string for disabled property
        chooseOption("");
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        checkAnswer();
        setGameState("finished")
    }

    return (
        <div className="Quiz">
            <h2>{Questions[currentQuestion].prompt}</h2>
            <div className="answers">
                <button onClick={() => { chooseOption("gumdrop") }}>{Questions[currentQuestion].gumdrop}</button>
                <button onClick={() => { chooseOption("licorice") }}>{Questions[currentQuestion].liquorice}</button>
                <button onClick={() => { chooseOption("lollipop") }}>{Questions[currentQuestion].lollipop}</button>
                <button onClick={() => { chooseOption("chocolate") }}>{Questions[currentQuestion].chocolate}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} disabled={optionChosen.length === 0 ? true : false} className="finishQuiz">Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion} disabled={optionChosen.length === 0 ? true : false} className="nextQuestion">Next Question</button>
            )}
        </div>
    )
}

export default Quiz;