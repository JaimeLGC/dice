import styled from "styled-components"
import { Button } from "../styled/button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dice.png" />        
      </div>
      <div>
        <h1>Dados</h1>
        <Button onClick={toggle}>Jugar</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 90px;
      white-space: nowrap;
    }
  }
`;

