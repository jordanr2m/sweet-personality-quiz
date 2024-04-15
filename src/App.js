import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  // Globale states to store personality scores
  const [chocolateScore, setChocolateScore] = useState(0);
  const [gumdropScore, setGumdropScore] = useState(0);
  const [liquoriceScore, setLiquoriceScore] = useState(0);
  const [lollipopScore, setLollipopScore] = useState(0);

  return (
    <div className="App">
      <h1>Super Sweet Personality Quiz 🍭</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, userName, setUserName, chocolateScore, setChocolateScore, gumdropScore, setGumdropScore, liquoriceScore, setLiquoriceScore, lollipopScore, setLollipopScore }}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
