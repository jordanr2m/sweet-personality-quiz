import "../App.css";
import { useContext } from "react";
import { GameStateContext } from '../helpers/Contexts';

function Menu() {
    const { setGameState, setUserName } = useContext(GameStateContext);

    return (
        <div className="Menu">
            <div className="menu-wrapper">
                <p className="directions">Answer each question honestly. Choose the response that most resonates with you. ◡̈</p>

                <label htmlFor="name">Enter your name:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setGameState("playing")
                        }
                    }}
                />
                <button onClick={() => { setGameState("playing") }}>Start Quiz</button>
            </div>
        </div>
    )
}

export default Menu;