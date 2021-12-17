import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearCountryDetail,
  getCountryById,
} from "../../Redux/Actions/countriesActions";
import { Container } from "../../StyledComponents/Container";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Title } from "../../StyledComponents/Title";

const Detail = () => {
  const country = useSelector((state) => state.countriesReducer.countryDetail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCountryById(params.id));
    return () => {
      dispatch(clearCountryDetail());
    };
  }, [dispatch, params.id]);

  return (
    <Wrapper
      flex="flex"
      aItems="center"
      width="100vw"
      height="85vh"
      bground="transparent"
      padding="0 50px"
    >
      <Wrapper
        height="fit-content"
        flex="flex"
        bground="#00000090"
        width="100%"
        padding="50px"
      >
        <Title bground="transparent">Country Details:</Title>
        <Container margin="0 20px" bground="transparent">
          <img
            src={country.flags}
            alt={country.id}
            style={{ borderRadius: "25px" }}
            width="300px"
            height="200px"
          />
        </Container>
        <Wrapper
          width="fit-content"
          height="fit-content"
          flex="flex"
          aItems="flex-start"
        >
          <Container margin="0 20px" padding="50px" bground="transparent">
            <Title
              tAlign="left"
              color="Chocolate"
              padding="10px 0"
              bground="transparent"
            >
              Country
            </Title>
            <p>{country.name}.</p>
            <Title
              tAlign="left"
              color="Chocolate"
              padding="10px 0"
              bground="transparent"
            >
              Capital
            </Title>
            <p>{country.capital}.</p>
            <Title
              tAlign="left"
              color="Chocolate"
              padding="10px 0"
              bground="transparent"
            >
              Population
            </Title>
            <p>{country.population} Habitants.</p>
          </Container>
          <Container margin="0 20px" padding="50px" bground="transparent">
            <Title
              tAlign="left"
              color="Chocolate"
              padding="10px 0"
              bground="transparent"
            >
              Area
            </Title>
            <p>{country.area} Km<sup>2</sup>.</p>
            <Title
              tAlign="left"
              color="Chocolate"
              padding="10px 0"
              bground="transparent"
            >
              Continent
            </Title>
            <p>{country.continents}.</p>
            {country.activities?.length ?
            (
              <>
                <Title
                  tAlign="left"
                  color="Chocolate"
                  padding="10px 0"
                  bground="transparent"
                >
                  Activities
                </Title>
                {country.activities?.map((a) => (
                  <p style={{paddingBottom: "10px"}} key={Math.random(0, 10)}>{a.name}.</p>
                ))}
              </>
            ): ""}
          </Container>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Detail;