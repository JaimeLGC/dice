import styled from "styled-components";

export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;