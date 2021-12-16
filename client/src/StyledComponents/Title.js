import styled from "styled-components";

export const Title = styled.h2`
  text-transform: ${({ tTransform }) => tTransform};
  font-size: ${({fSize}) => fSize || "1.5em"};
  color: ${({ color }) => color || "azure"};
  font-weight: ${({ fWeight }) => fWeight || "lighter"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({width}) => width || "100%"};
  background-color: ${({ bground }) => bground || "#000"};
  text-align: ${({ tAlign }) => tAlign || "center"};
  border-radius: ${({ bRadius }) => bRadius || "0"};
`;
