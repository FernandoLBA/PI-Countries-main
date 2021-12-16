import React from "react";
import Cards from "../Cards/Cards";
import Modifiers from "../Modifiers/Modifiers";
import { Container } from "../../StyledComponents/Container";
import { useSelector } from "react-redux";
import { Wrapper } from "../../StyledComponents/Wrapper";
import Loading from "../Loading/Loading"

const Home = ({ continents }) => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const modifiedCountries = useSelector(
    (state) => state.countriesReducer.modifiedCountries
  );

  return (
    <Wrapper flex="flex" jContent="center" height="fit-content" margin="50px 0">
      <Modifiers continents={continents} />
      <Container
        height="fit-content"
        width="100%"
        padding="50px"
        bground="transparent"
      >
        {
          countries.length ? 
          <Cards
            modifiedCountries={
              modifiedCountries.length ? modifiedCountries : countries
            }
          />
          :
          <Loading />
        }
      </Container>
    </Wrapper>
  );
};

export default Home;
