import styled from "styled-components"

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/img/dice.png" />        
      </div>
      <div>
        <h1>Dados</h1>
        <button onClick={toggle}>Jugar</button>
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

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 15px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s background ease-in;

  &:hover {
    background-color: 383838;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;