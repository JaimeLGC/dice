import TotalPoints from "./TotalPoints";
import Selector from "./Selector";
import styled from "styled-components";
import Dice from "./Dice";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(100);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => { 
    return Math.floor(Math.random() * (max - min) + min); 
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2);
    }
  };

  return (
    <MainContainer>
      <div className="top">
        <TotalPoints score={score} />
        <Selector 
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Dice 
        currentDice={currentDice}
        rollDice={rollDice}
      />
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
`;