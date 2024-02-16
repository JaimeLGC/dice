import styled from "styled-components";

const Dice = ({ rollDice, currentDice1, currentDice2 }) => {

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/img/dice/dice-${currentDice1}.png`} alt="dice 1" />
        <img src={`/img/dice/dice-${currentDice2}.png`} alt="dice 1" />
      </div>
      <p>Haz click en el dado para lanzar</p>
    </DiceContainer>
  )
}

export default Dice

const DiceContainer = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }
  img {
    width: 200px;
    padding: 10px;
  }
  p {
    font-size: 25px;
  }
`;