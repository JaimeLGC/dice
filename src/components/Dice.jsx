import styled from "styled-components";

const Dice = ({ rollDice, currentDice }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/img/dice/dice-${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Haz click en el dado para lanzar</p>
    </DiceContainer>
  )
}

export default Dice

const DiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 25px;
  }
`;