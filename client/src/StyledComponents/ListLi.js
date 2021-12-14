import styled from "styled-components";

export const Ul = styled.ul`
  display: ${(props) => props.flex || "block"};
  justify-content: ${(props) => props.jContent || "center"};
  align-items: ${(props) => props.aItems || "center"};
  width: ${(props) => props.width || "100%"};
  border: ${({border}) => border && border};
`;

export const Li = styled.li`
  list-style: none;
  margin: 0 10px;
`;
