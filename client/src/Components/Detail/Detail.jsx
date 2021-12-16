import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../StyledComponents/Container";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";
import Loading from "../Loading/Loading";

const Detail = () => {
  const detail = useSelector((state) => state.countriesReducer.countryDetail);

  return (
    <Wrapper flex="flex" height="fit-content">
      {detail.length ? (
        <Container
          height="fit-content"
          width="100%"
          padding="50px"
          bground="transparent"
        >
          <Wrapper
            width="100%"
            height="fit-content"
            flex="flex"
            jContent="center"
            aItems="center"
            padding="40px"
            bground="#00000080"
          >
            <Container
              width="50%"
              height="350px"
              bground={`url(${detail[0].flags}) no-repeat`}
            >
              <Title
                fSize="1em"
                bRadius="25px 0"
                width="50%"
                bground="chocolate"
                tAlign="left"
                fWeight="bold"
                padding="20px"
              >
                {detail[0].name}
              </Title>
            </Container>
            <Wrapper width="50%" height="fit-content" padding="20px">
              <Title width="fit-content" bground="transparent" padding="5px 0">
                Capital:
              </Title>
              <p style={{marginBottom: "10px"}}>{detail[0].capital}</p>
              <Title width="fit-content" bground="transparent" padding="5px 0">
                Population:
              </Title>
              <p style={{marginBottom: "10px"}}>{detail[0].population}</p>
              <Title width="fit-content" bground="transparent" padding="5px 0">
                Area:
              </Title>
              <p style={{marginBottom: "10px"}}>{detail[0].area}</p>
              <Title width="fit-content" bground="transparent" padding="5px 0">
                Continent:
              </Title>
              <p style={{marginBottom: "10px"}}>{detail[0].continents[0]}</p>
              <Title width="fit-content" bground="transparent" padding="5px 0">
                Activities:
              </Title>
              <Wrapper flex="flex" jContent="flex-start" width="100%" height="fit-content" bRadius="0">
                {detail[0].activities.map((a) => (
                  <p style={{margin: "0 10px 0 0"}}>{a.name}</p>
                ))}
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default Detail;
