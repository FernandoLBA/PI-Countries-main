import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${({ color }) => color || "azure"};
  font-size: ${({ fSize }) => fSize || ".8em"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({bground}) => bground || "transparent"};

  &.error {
    color: azure;
    padding: 5px 10px;
    border-radius: 25px;
    background: crimson;
  }
`;
