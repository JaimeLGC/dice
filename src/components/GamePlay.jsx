import TotalPoints from "./TotalPoints";
import Selector from "./Selector";
import styled from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

// Guarda el flujo del juego
const GamePlay = () => {
  // Constantes que guardan los archivos externos necesarios
  const [score, setScore] = useState(100);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice1, setCurrentDice1] = useState(1);
  const [currentDice2, setCurrentDice2] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  // Función para generar los números
  const generateRandomNumber = (min, max) => { 
    return Math.floor(Math.random() * (max - min) + min); 
  };

  // Función que atribuye los valores a los dados y asinga los puntos pertinentes
  const rollDice = () => {

    // Si el jugador intenta lanzar el dado sin seleccionar una opción salta un error
    if(!selectedNumber) {
      setError("Selecciona una opción");
      return;
    };

    // Se generan y asignan los valores
    const randomNumber1 = generateRandomNumber(1, 7);
    const randomNumber2 = generateRandomNumber(1, 7);
    setCurrentDice1((prev) => randomNumber1);
    setCurrentDice2((prev) => randomNumber2);
    const randomNumber = randomNumber1 + randomNumber2

    // Comprobación de "par" e "impar"
    if(selectedNumber == "par" && randomNumber % 2 == 0 || selectedNumber == "impar" && randomNumber % 2 != 0){
      setScore((prev) => prev + 6);
    }else if(selectedNumber == "par" && randomNumber % 2 != 0 || selectedNumber == "impar" && randomNumber % 2 == 0){
      setScore((prev) => prev - 6);
    }
    
    // Comprobación de "1-6" y "7-12"
    else if(selectedNumber == "1-6" && randomNumber <= 6 || selectedNumber == "7-12" && randomNumber >= 7){
        setScore((prev) => prev + 6);
    }else if(selectedNumber == "1-6" && randomNumber > 6 || selectedNumber == "7-12" && randomNumber <= 6){
      setScore((prev) => prev - 6);
    }

    // Comprobación de número seleccionado
    else if(selectedNumber == randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - randomNumber);
    }

    // Se resetea el número seleccionado
    setSelectedNumber(undefined);
  };

  // Función que resetea los puntos
  const resetScore = () => {
    setScore(100);
  }

  // Estructura de la vista
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
        currentDice1={currentDice1}
        currentDice2={currentDice2}
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

// Estilos
const MainContainer = styled.main`
  .top {
   display: flex;
   justify-content: space-between;
   align-items: end;
  }
  .btns {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;