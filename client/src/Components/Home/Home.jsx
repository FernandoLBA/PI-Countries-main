import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import Modifiers from "../Modifiers/Modifiers";
import Loading from "../Loading/Loading";
import Paginate from "../Paginate/Paginate";
import { Container } from "../../StyledComponents/Container";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Title } from "../../StyledComponents/Title";
import { loadCountries } from "../../Redux/Actions/countriesActions";
import { getActivities } from "../../Redux/Actions/activitiesActions";

const Home = ({ continents }) => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  let modifiedCountries = useSelector(
    (state) => state.countriesReducer.modifiedCountries
  );

  useEffect(() => {
    dispatch(loadCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <Wrapper
      flex="flex"
      jContent="center"
      width="100vw"
      height="fit-content"
      padding="50px 0"
      bRadius="0"
      >
      <Modifiers continents={continents} />
      <Paginate />
      <Container
        height="fit-content"
        width="100%"
        padding="50px"
        bground="transparent"
      >
        {countries?.length ? (
          <Cards
            modifiedCountries={
              modifiedCountries.length ? modifiedCountries : countries
            }
          />
        ) : (
          <>
            <Loading />
            <Title bground="transparent" padding="20px">
              Loading...
            </Title>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
