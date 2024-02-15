import styled from "styled-components";

const TotalPoints = () => {
  return (
    <PointsContainer>
        <h1>100</h1>
        <p>Puntos</p>
    </PointsContainer>
  );
};

export default TotalPoints;

const PointsContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1 {
        font-size: 100px;
        line-height: 100px;
    }
    p {
        font-size: 25px;
        font-weight: 500px;
    }
`;