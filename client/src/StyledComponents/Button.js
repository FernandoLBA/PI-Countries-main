import styled from "styled-components";

export const Button = styled.button`
  display: ${({ display }) => display || "inline"};
  padding: ${({ padding }) => padding || "10px 20px"};
  border-radius: ${({ bRadius }) => bRadius || "25px"};
  font-weight: bold;
  text-transform: uppercase;
  margin: ${({ margin }) => margin || "0"};
  border: ${({ border }) => "2px solid " + border || "none"};
  color: ${({ color }) => color || "#F0FFFF"};
  background-color: ${({ bground }) => bground || "#D2691E"};
  font-size: ${({ fSize }) => fSize || ".8em"};
  cursor: pointer;
  transition: ease all 1s;

  &:hover {
    background-color: ${({ bground }) => (bground ? `${bground}90` : "coral")};
    color: ${({ color }) => (color ? `${color}90` : "#F0FFFF")};
    transition: ease all 1s;
  }

  /* al presionarlo */
  &:active {
    transform: translateY(10%);
  }
  
  /* luego de presionarlo */
  &:focus {
    background-color: ${({ bgroundColor }) =>
      bgroundColor ? `${bgroundColor}90` : "Chocolate"};
    color: azure;
  }
`;
