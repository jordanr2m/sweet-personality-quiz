import "../App.css";
import { Questions } from "../helpers/Questions";
import { useContext, useState } from "react";
import {GameStateContext} from '../helpers/Contexts';

function EndScreen() {
    const { userName, finalResult } = useContext(GameStateContext);

    return (
        <div className="EndScreen">
            <h2>Quiz Complete!</h2>
            <h3>{userName}, your Result is {finalResult}!</h3>
        </div>
    )
}

export default EndScreen;