import React from "react";
import { Button } from "../../StyledComponents/Button";
import { Container } from "../../StyledComponents/Container";
import { MainTittle } from "../../StyledComponents/MainTitle";
import { Title } from "../../StyledComponents/Title";
import { LandingContainer, Hero } from "./LandingStyled";
import { Span } from "../../StyledComponents/Span";

const Landing = () => {
  return (
    <LandingContainer>
      <Container
        bground="transparent"
        width="78vw"
        bRadius="0"
        height="40px"
        margin="0 0 50px 0"
      >
        <MainTittle tAlign="left" width="100%" padding="0 14px">
          COUNTRIES
        </MainTittle>
      </Container>
      <Hero>
        <Title bground="#00000090" padding="20px">
          Find <Span fWeight="bold">fun activities around the world and </Span>take a good time
        </Title>
        <Button
        bground="#D2691E"
          margin="50px"
          onClick={() => (window.location.href = "/home")}
        >
          Let's Fun!
        </Button>
      </Hero>
    </LandingContainer>
  );
};

export default Landing;
