import "../App.css";
import { useState, useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';
import { Questions } from "../helpers/Questions";

function Quiz() {
    const { setGameState, chocolateScore, setChocolateScore, gumdropScore, setGumdropScore, liquoriceScore, setLiquoriceScore, lollipopScore, setLollipopScore, finalResult, setFinalResult } = useContext(GameStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    // Grab the user's answer
    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    const checkAnswer = () => {
        if (optionChosen === "gumdrop") {
            console.log("Gumdrop")
            setGumdropScore(gumdropScore + 1)
        }
        if (optionChosen === "liquorice") {
            console.log("Liquorice")
            setLiquoriceScore(liquoriceScore + 1)
        }
        if (optionChosen === "lollipop") {
            console.log("Lollipop")
            setLollipopScore(lollipopScore + 1)
        }
        if (optionChosen === "chocolate") {
            console.log("Chocolate")
            setChocolateScore(chocolateScore + 1)
        }
    }

    const nextQuestion = () => {
        checkAnswer();
        setCurrentQuestion(currentQuestion + 1)
    }

    const checkResult = () => {
        if (gumdropScore > liquoriceScore && gumdropScore > lollipopScore && gumdropScore > chocolateScore) {
            setFinalResult(0);
        }
        if (liquoriceScore > gumdropScore && liquoriceScore > lollipopScore && liquoriceScore > chocolateScore) {
            setFinalResult(1);
        }
        if (lollipopScore > gumdropScore && lollipopScore > liquoriceScore && lollipopScore > chocolateScore) {
            setFinalResult(2)
        }
        if (chocolateScore > gumdropScore && chocolateScore > liquoriceScore && chocolateScore > lollipopScore) {
            setFinalResult(3)
        }
        // Outlier - Mixed
        if (gumdropScore === liquoriceScore || gumdropScore === lollipopScore || gumdropScore === chocolateScore || liquoriceScore === lollipopScore || liquoriceScore === chocolateScore || lollipopScore === chocolateScore) {
            setFinalResult(4)
        }
    }

    const finishQuiz = () => {
        checkAnswer();
        checkResult();
        setGameState("finished")
    }

    return (
        <div className="Quiz">
            <h2>{Questions[currentQuestion].prompt}</h2>
            <div className="answers">
                <button onClick={() => { chooseOption("gumdrop") }}>{Questions[currentQuestion].gumdrop}</button>
                <button onClick={() => { chooseOption("liquorice") }}>{Questions[currentQuestion].liquorice}</button>
                <button onClick={() => { chooseOption("lollipop") }}>{Questions[currentQuestion].lollipop}</button>
                <button onClick={() => { chooseOption("chocolate") }}>{Questions[currentQuestion].chocolate}</button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} className="finishQuiz">Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion} className="nextQuestion">Next Question</button>
            )}
        </div>
    )
}

export default Quiz;