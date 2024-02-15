import GameState from "./components/GameState";
import Startgame from "./components/StartGame";

function App() {
  const [isGameStarted,setIsGameStarted] = usestate(true);

  const toggleGameState = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GameState /> : <Startgame toggle={toggleGameState} />}
    </>
  );
}

export default App
