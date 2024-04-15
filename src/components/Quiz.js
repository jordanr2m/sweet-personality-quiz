import "../App.css";
import { useState } from "react";
import { useContext } from "react";
import {GameStateContext} from '../helpers/Contexts';
import { Questions } from "../helpers/Questions";

function Quiz() {
    const { setGameState, chocolateScore, setChocolateScore, gumdropScore, setGumdropScore, liquoriceScore, setLiquoriceScore, lollipopScore, setLollipopScore } = useContext(GameStateContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    // Grab the user's answer
    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    const nextQuestion = () => {
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

        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className="Quiz">
            <h2>{Questions[currentQuestion].prompt}</h2>
            <div className="answers">
                <button onClick={() => {chooseOption("gumdrop")}}>{Questions[currentQuestion].gumdrop}</button>
                <button onClick={() => {chooseOption("liquorice")}}>{Questions[currentQuestion].liquorice}</button>
                <button onClick={() => {chooseOption("lollipop")}}>{Questions[currentQuestion].lollipop}</button>
                <button onClick={() => {chooseOption("chocolate")}}>{Questions[currentQuestion].chocolate}</button>
            </div>

            
        </div>
    )
}

export default Quiz;