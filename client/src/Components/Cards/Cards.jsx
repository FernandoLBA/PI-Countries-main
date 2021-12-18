import React from "react";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";
import Card from "../Card/Card";

const Cards = ({ modifiedCountries }) => {
  return (
    <Wrapper
      width="100%"
      height="fit-content"
      flex="flex"
      jContent="space-between"
      aItems="center"
      padding="50px"
      bground="#00000080"
    >
      <Title bground="transparent" padding="0 0 50px 0">Results:</Title>
      {modifiedCountries.map((c) => (
        <Card key={c.id} country={c} />
      ))}
    </Wrapper>
  );
};

export default Cards;
