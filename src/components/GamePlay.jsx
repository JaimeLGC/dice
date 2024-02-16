import TotalPoints from "./TotalPoints";
import Selector from "./Selector";
import styled from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(100);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => { 
    return Math.floor(Math.random() * (max - min) + min); 
  };

  const rollDice = () => {
    if(!selectedNumber) {
      setError("Selecciona un número");
      return;
    };
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if(selectedNumber == "par" && randomNumber % 2 == 0 || selectedNumber == "impar" && randomNumber % 2 != 0){
      setScore((prev) => prev + 6);
    }else if(selectedNumber == "par" && randomNumber % 2 != 0 || selectedNumber == "impar" && randomNumber % 2 == 0){
      setScore((prev) => prev - 6);
    }else if(selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - randomNumber);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(100);
  }

  return (
    <MainContainer>
      <div className="top">
        <TotalPoints score={score} />
        <Selector
          error={error} 
          setError={setError}
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Dice 
        currentDice={currentDice}
        rollDice={rollDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reiniciar</OutlineButton>
        <OutlineButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Ocultar" : "Mostrar"} reglas
        </OutlineButton>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top {
   display: flex;
   justify-content: space-between;
   align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;