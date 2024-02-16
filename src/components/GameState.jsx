import TotalPoints from "./TotalPoints";
import Selector from "./Selector";
import styled from "styled-components";
import Dice from "./Dice";

const GameState = () => {
  return (
    <MainContainer>
      <div className="top">
        <TotalPoints />
        <Selector />
      </div>
      <Dice />
    </MainContainer>
  );
};

export default GameState;

const MainContainer = styled.main`
  .top {
   display: flex;
   justify-content: space-between;
    align-items: end;
  }
`;