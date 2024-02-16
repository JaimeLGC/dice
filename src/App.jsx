import { useState } from "react";
import GameState from "./components/GameState";
import Startgame from "./components/StartGame";

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGameState = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GameState /> : <Startgame toggle={toggleGameState} />}
    </>
  );
};

export default App;
