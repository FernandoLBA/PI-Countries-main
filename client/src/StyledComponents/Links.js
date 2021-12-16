import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Links = styled(Link)`
  text-decoration: none;
  color: ${({color}) => color ? color : "#F0FFFF"};
  transition: ease all 1s;
  
  &:hover{
    color: ${({color}) => color ? `${color}90` : "#F0FFFF90"};
    font-size: .97em;
    transform: translateY(-3%);
    transition: ease all 1s;
  }
  
  &:visited{
    color: ${({color}) => color ? color : "#F0FFFF"};
  }
`;