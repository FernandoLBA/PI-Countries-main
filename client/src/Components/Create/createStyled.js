import styled from "styled-components";
import Create from "./Create";

export const createStyled = styled(Create).attrs(props => ({className: props.className}))`
     &.field{
          width: 100%;
     }
`;