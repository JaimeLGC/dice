import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Startgame from "./components/StartGame";

// Función que pasa de la pantalla de inicio y la pantalla de juego
function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <Startgame toggle={toggleGamePlay} />}
    </>
  );
};

export default App;
