import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  border-radius: ${({ bRadius }) => bRadius || "25px"};
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
  background: ${({ bground }) => bground || "#000"};
  background-size: cover;
  position: ${({ position }) => position};
  border: ${({ border }) => border && border};
`;

// display: ${props => props.flex || "block"};
// flex-direction: ${props => props.fDirection || "row"};
// justify-content: ${props => props.jContent || "center"};
// align-items: ${props => props.aItems || "center"};
// flex-wrap: ${props => props.fWrap || "nowrap"};
// overflow: hidden;
