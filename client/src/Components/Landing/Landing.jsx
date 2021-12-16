import React from "react";
import { Button } from "../../StyledComponents/Button";
import { Container } from "../../StyledComponents/Container";
import { MainTitle } from "../../StyledComponents/MainTitle";
import { Title } from "../../StyledComponents/Title";
import { LandingContainer, Hero } from "./LandingStyled";
import { Span } from "../../StyledComponents/Span";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Container
        bground="transparent"
        width="78vw"
        bRadius="0"
        height="40px"
        margin="0 0 50px 0"
      >
        <MainTitle tAlign="left" width="100%" padding="0 14px">
          COUNTRIES
        </MainTitle>
      </Container>
      <Hero>
        <Title bground="#00000090" padding="20px">
          Find<Span fWeight="bold"> fun activities around the world and </Span>
          have a good time
        </Title>
        <Button
          bground="#D2691E"
          margin="50px"
          onClick={() => (navigate("/home"))}
        >
          Let's Go!
        </Button>
      </Hero>
    </LandingContainer>
  );
};

export default Landing;
