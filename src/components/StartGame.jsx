import styled from "styled-components"
import { Button } from "../styled/button";

// Guarda el div de la pantalla inicial
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dice.png" />        
      </div>
      <div>
        <h1>Juego de Dados</h1>
        <Button onClick={toggle}>Jugar</Button>
      </div>
    </Container>
  );
};

export default StartGame;

// Estilos
const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  h1 {
      font-size: 90px;
      white-space: nowrap;
    }
  img {
    max-width: 300px;
    margin: 20px;
  }
`;

