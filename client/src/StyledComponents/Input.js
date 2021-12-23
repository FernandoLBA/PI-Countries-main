import styled from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};

  &.error{
     border: 2px solid crimson;
  }
`;
