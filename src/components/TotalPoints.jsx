import styled from "styled-components";

// Guarda el div con los puntos totales
const TotalPoints = ({ score }) => {
  return (
    <PointsContainer>
        <h1>{score}</h1>
        <p>Puntos</p>
    </PointsContainer>
  );
};

export default TotalPoints;

// Estilos
const PointsContainer = styled.div`
    max-width: 200px;
    text-align: center;
    height: 450px;
    h1 {
        font-size: 100px;
        line-height: 50px;
    }
    p {
        font-size: 25px;
        font-weight: 500px;
        line-height: 0px;
    }
`;