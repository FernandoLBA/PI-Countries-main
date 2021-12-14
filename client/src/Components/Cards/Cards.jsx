import React from "react";
import { Wrapper } from "../../StyledComponents/Wrapper";
import Card from "../Card/Card";

const Cards = ({ modifiedCountries }) => {
  console.log(modifiedCountries[0])
  return (
    <Wrapper
      width="100%"
      height="fit-content"
      flex="flex"
      jContent="center"
      aItems="center"
      padding="40px"
      bground="#00000030"
    >
      {modifiedCountries.map((c) => (
        <Card key={c.id} country={c} />
      ))}
    </Wrapper>
  );
};

export default Cards;
