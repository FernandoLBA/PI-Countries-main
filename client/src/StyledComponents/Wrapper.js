import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ flex }) => flex || "block"};
  flex-wrap: wrap;
  flex-direction: ${({ fDirection }) => fDirection || "row"};
  justify-content: ${({ jContent }) => jContent || "center"};
  align-items: ${({ aItems }) => aItems || "center"};
  width: ${({ width }) => width || "100vw"};
  height: ${({ height }) => height || "10vh"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ bground }) => bground || "0"};
  background-size: ${({bSize}) => bSize || "cover"};
  backdrop-filter: ${({bDrop}) => bDrop || "none"};
  border-radius: ${({ bRadius }) => bRadius || "25px"};
  border: ${({border}) => border || "none"};
  overflow: hidden;
`;