import React from "react";
import { Container } from "../../StyledComponents/Container";
import { Ul, Li } from "../../StyledComponents/ListLi";
import { Button } from "../../StyledComponents/Button";
import { Links } from "../../StyledComponents/Links";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Navbar = () => {
  return (
    <Container height="fit-content" bRadius="0" bground="#D2691E" width="100%">
      <Wrapper
        flex="flex"
        jContent="space-between"
        aItems="center"
        padding="0 50px"
        width="100%"
        position="fixed"
      >
        <Ul flex="flex" jContent="space-between" width="100%">
          <Links to="/">
            <Li>COUNTRIES</Li>
          </Links>
          <Wrapper
            flex="flex"
            aItems="center"
            jContent="space-between"
            height="5vh"
            bRadius="0"
            width="30vw"
            bground="transparent"
          >
            <Links to="/home">
              <Li>Home</Li>
            </Links>
            <Button color="chocolate" bground="#F0FFFF">
              add activity
            </Button>
          </Wrapper>
        </Ul>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
