import "../App.css";
// import { Questions } from "../helpers/Questions";
import { useContext, useEffect } from "react";
import {GameStateContext} from '../helpers/Contexts';

function EndScreen() {
    const { userName, score, finalResult, setFinalResult } = useContext(GameStateContext);

    
    const checkResult = () => {
        if (score <= 8) {
            setFinalResult(0);
        } else if ((score > 8) && (score <= 16)) {
            setFinalResult(1);
        } else if ((score > 16) && (score <= 23)) {
            setFinalResult(2);
        } else if ((score > 23) && (score <= 28)) {
            setFinalResult(3);
        }
    }
    
    // Must use useEffect hook to call the function. Similar to using componentDidUpdate w Class components
    useEffect(() => {
        checkResult();
    })

    return (
        <div className="EndScreen">
            <h2>Quiz Complete!</h2>
            <h3>{userName}, your Result is {finalResult}!</h3>
            {score}
        </div>
    )
}

export default EndScreen;