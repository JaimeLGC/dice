import { useState } from "react";
import styled from "styled-components";

const Selector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const arrNumber1 = [1, 2, 3, 4, 5, 6];
  const arrNumber2 = [7, 8, 9, 10, 11, 12];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p>Seleccione una opción</p>
      <div className="flex">
        {
          arrNumber1.map((value, i) => (
            <Box 
              isselected={value == selectedNumber} 
              key={i} 
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))
        };
      </div>
      <div className="flex">
        {
          arrNumber2.map((value, i) => (
            <Box 
              isselected={value == selectedNumber} 
              key={i} 
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))
        };
      </div>
      <div className="flex">
        <Rectangle 
          isselected={selectedNumber == "par"} 
          key={"par"} 
          onClick={() => numberSelectorHandler("par")}>
            Par
        </Rectangle>
        <Rectangle 
          isselected={selectedNumber == "impar"} 
          key={"impar"} 
          onClick={() => numberSelectorHandler("impar")}>
            Impar
        </Rectangle>
      </div>
      <div className="flex">
        <Rectangle 
          isselected={selectedNumber == "1-6"} 
          key={"1-6"} 
          onClick={() => numberSelectorHandler("1-6")}>
            1 - 6
        </Rectangle>
        <Rectangle 
          isselected={selectedNumber == "7-12"} 
          key={"7-12"} 
          onClick={() => numberSelectorHandler("7-12")}>
            7 - 12
        </Rectangle>
      </div>
      <p className="error">{error}</p>
    </NumberSelectorContainer>
  );
};

export default Selector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: end;


  .flex {
    display: flex;
    gap: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
    margin-right: 30px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const Rectangle = styled.div`
  height: 52px;
  width: 253px;
  margin-right: 30px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;