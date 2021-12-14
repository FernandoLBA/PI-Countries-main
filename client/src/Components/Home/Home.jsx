import React from "react";
import Cards from "../Cards/Cards";
import { Container } from "../../StyledComponents/Container";
import { useSelector } from "react-redux";

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const modifiedCountries = useSelector(
    (state) => state.countriesReducer.modifiedCountries
  );

  return (
    <Container
      height="fit-content"
      width="100%"
      padding="50px"
      bground="transparent"
    >
      <Cards
        modifiedCountries={
          modifiedCountries.length ? modifiedCountries : countries
        }
      />
    </Container>
  );
};

export default Home;
