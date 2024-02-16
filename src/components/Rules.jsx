import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>Cómo jugar</h2>
        <div className="text">
            <p>Selecciona un número</p>
            <p>Haz click en el dado para lanzarlo</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2 {
        font-size: 25px;
        font-weight: bold;
    }
    .text {
        margin-top: 25px;
    }
`;