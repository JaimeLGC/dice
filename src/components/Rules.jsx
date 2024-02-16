import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>Cómo jugar</h2>
        <div className="text">
            <p>- Selecciona una opción.</p>
            <p>- Haz click en el dado para lanzarlo.</p>
            <p>- En caso de seleccionar un número, estarás apostando la cantidad acorde al número seleccionado.</p>
            <p>- En caso de selecciónar otra de las opciones, estarás apostando 6 puntos.</p>
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
    margin-top: 30px;
    border-radius: 10px;
    h2 {
        font-size: 25px;
        font-weight: bold;
    }
    .text {
        margin-top: 25px;
    }
`;