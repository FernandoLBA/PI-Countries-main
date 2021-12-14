import styled from 'styled-components';

export const Span = styled.span`
  color: ${({color}) => color || "azure"};
  font-weight: ${({fWeight}) => fWeight || "lighter"}
`;