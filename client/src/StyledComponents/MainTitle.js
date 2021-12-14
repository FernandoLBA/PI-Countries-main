import styled from "styled-components";

export const MainTittle = styled.h1`
  color: ${(props) => props.color || "azure"};
  text-align: ${props => props.tAlign || "left"};
  width: ${props => props.width || "0"};
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
`;
