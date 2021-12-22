import React from "react";
import { Links } from "../../StyledComponents/Links";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Container } from "../../StyledComponents/Container";
import { Title } from "../../StyledComponents/Title";
import { Span } from "../../StyledComponents/Span";

const Card = ({ country }) => {

  return (
    <Links to={`/home/Country/${country.id}`}>
      {/* CARD */}
      <Wrapper
        width="300px"
        height="310px"
        bground={`url(${country.flags}) no-repeat`}
        bSize="300px 68%"
        margin="0 0 50px 0"
        // border="2px solid green"
      >
        {/* Contenedor de textos */}
        <Container
          width="100%"
          height="30%"
          margin="73% 0 0 0"
          bRadius="0"
          bground="azure"
          // border="2px solid red"
        >
          {/* Wrapper de los textos */}
          <Wrapper
            width="100%"
            bRadius="0"
            padding="20px"
            height="100%"
            flex="flex"
            fDirection="column"
            jContent="space-around"
            // border="2px solid blue"
          >
            <Title
              fSize=".8em"
              tAlign="left"
              width="100%"
              fWeight="bold"
              bground="transparent"
              color="#D2691E"
            >
              {country.name}
            </Title>

            {country.continents.map((c) => (
              <Title
                color="#D2691E"
                bground="transparent"
                tAlign="left"
                fSize=".8em"
                key={Math.random(0, 10)}
              >
                <Span fWeight="bold" color="#D2691E">
                  Continent:{" "}
                </Span>
                {c}
              </Title>
            ))}
          </Wrapper>
        </Container>
      </Wrapper>
    </Links>
  );
};

export default Card;
