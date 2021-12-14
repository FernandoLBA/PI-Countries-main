import React from "react";
import { Button } from "../../StyledComponents/Button";
import { Links } from "../../StyledComponents/Links";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Container } from "../../StyledComponents/Container";
import { Title } from "../../StyledComponents/Title";

const Card = ({ country }) => {
  return (
    <Links to={`/home/${country.id}`}>
      <Wrapper
        width="300px"
        height="400px"
        bground={`url(${country.flags}) no-repeat`}
        bDrop="blur(8px)"
        bSize="300px 50%"
        flex="flex"
        fDirection="column"
        margin="10px"
        border="2px solid chocolate"
      >
        <Container
          width="100%"
          height="50%"
          margin="67% 0 0 0"
          bRadius="0 0 25px 25px"
          bground="transparent"
        >
          <Wrapper
            width="100%"
            bRadius="0"
            height="100%"
            flex="flex"
            fDirection="column"
            jContent="space-between"
            aItems="center"
            bground="transparent"
          >
            <Title
              bground="transparent"
              fSize="1em"
              tAlign="center"
              padding="20px"
              width="100%"
              color="chocolate"
              fWeight="bold"
            >
              {country.name}
            </Title>

            <Wrapper height="30%" width="100%" bRadius="0" padding="20px">
              {country.continents.map((c) => (
                <Title bground="transparent" fSize=".9em" key={Math.random(0, 10)}>{c}</Title>
              ))}
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </Links>
  );
};

export default Card;
