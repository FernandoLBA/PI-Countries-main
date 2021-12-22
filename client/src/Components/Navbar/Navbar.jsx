import React from "react";
import { Ul, Li } from "../../StyledComponents/ListLi";
import { Button } from "../../StyledComponents/Button";
import { Links } from "../../StyledComponents/Links";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper
      flex="flex"
      height="85px"
      padding="0 50px"
      bRadius="0"
      bground="#D2691E"
      width="100vw"
    >
      <Ul flex="flex" jContent="space-between" width="100%">
        <Links to="/">
          <Li>COUNTRIES</Li>
        </Links>
        <Wrapper
          flex="flex"
          aItems="center"
          jContent="space-between"
          bRadius="0"
          width="230px"
          bground="transparent"
          height="60px"
        >
          <Links to="/home">
            <Li>Home</Li>
          </Links>
          <Button color="chocolate" bground="#F0FFFF" onClick={() => navigate("/create")}>
            add activity
          </Button>
        </Wrapper>
      </Ul>
    </Wrapper>
  );
};

export default Navbar;
