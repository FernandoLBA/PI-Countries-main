import styled from "styled-components";

export const Button = styled.button`
  display: ${({ display }) => display || "inline"};
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin: ${({ margin }) => margin || "0"};
  border: ${({ border }) => "2px solid " + border || "none"};
  color: ${({ color }) => color || "#F0FFFF"};
  background-color: ${({ bground }) => bground || "#D2691E"};
  cursor: pointer;
  transition: ease all 1s;

  &:hover {
    background-color: ${({ bground }) => bground ? `${bground}90` : "coral"};
    color: ${({ color }) => color ? `${color}90` : "#F0FFFF"};
    transition: ease all 1s;
  }

  &:active {
    transform: translateY(10%);
  }
`;
