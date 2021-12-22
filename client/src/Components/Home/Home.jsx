import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Modifiers from "../Modifiers/Modifiers";
import Loading from "../Loading/Loading";
import { Container } from "../../StyledComponents/Container";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Title } from "../../StyledComponents/Title";
import { loadCountries } from "../../Redux/Actions/countriesActions";
import { getActivities } from "../../Redux/Actions/activitiesActions";
import Pagination from "../Pagination/Pagination";
import { paginate, cutterPage } from "../../Helpers/paginate";

const Home = ({ continents }) => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  let modifiedCountries = useSelector(
    (state) => state.countriesReducer.modifiedCountries
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCountries, setPaginatedCountries] = useState(
    cutterPage(currentPage, 10, modifiedCountries || countries)
  );

  useEffect(() => {
    dispatch(loadCountries());
    dispatch(getActivities());
  }, [dispatch]);
  
  useEffect(() => {
    setPaginatedCountries(cutterPage(currentPage, 10, modifiedCountries));
  }, [modifiedCountries, currentPage])

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
        {/* Pagination Buttons */}
        <Wrapper width="35%" height="fit-content" flex="flex" margin="5 0px 0 0">
          {paginate(modifiedCountries?.length)?.map((c) => (
            <Pagination key={c} num={c} setCurrentPage={setCurrentPage} />
          ))}
        </Wrapper>
  
      <Container
        height="fit-content"
        width="100%"
        padding="50px"
        bground="transparent"
      >

        {/* Countries */}
        {modifiedCountries?.length ? (
          <Cards
            modifiedCountries={
              paginatedCountries?.length ? paginatedCountries : modifiedCountries
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
