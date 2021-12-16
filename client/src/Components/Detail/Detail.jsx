import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../StyledComponents/Container";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";
import { Ul, Li } from "../../StyledComponents/ListLi";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { clearCountryDetail } from "../../Redux/Actions/countriesActions";

const Detail = () => {
  const detail = useSelector((state) => state.countriesReducer.countryDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // componentWillUnmount
  useEffect(() => {
    if (detail.error) {
      alert(`${detail.error}, redirecting you.`);
      navigate("/home");
    }

    return () => {
      dispatch(clearCountryDetail());
    };
  }, [dispatch, detail.error, navigate]);

  return (
    <Wrapper flex="flex" width="100%" height="85.6vh" padding="50px">
      {detail.length ? (
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

          <Wrapper width="20%" height="fit-content" padding="0 50px">
            <Title
              color="chocolate"
              fWeight="bold"
              width="fit-content"
              bground="transparent"
              padding="5px 0"
            >
              Capital:
            </Title>
            <p style={{ marginBottom: "10px" }}>{detail[0].capital}</p>
            <Title
              color="chocolate"
              fWeight="bold"
              width="fit-content"
              bground="transparent"
              padding="5px 0"
            >
              Population:
            </Title>
            <p style={{ marginBottom: "10px" }}>{detail[0].population}</p>
            <Title
              color="chocolate"
              fWeight="bold"
              width="fit-content"
              bground="transparent"
              padding="5px 0"
            >
              Area:
            </Title>
            <p style={{ marginBottom: "10px" }}>{detail[0].area}</p>
            <Title
              color="chocolate"
              fWeight="bold"
              width="fit-content"
              bground="transparent"
              padding="5px 0"
            >
              Continent:
            </Title>
            <p style={{ marginBottom: "10px" }}>{detail[0].continents[0]}</p>
            <Title
              color="chocolate"
              fWeight="bold"
              width="fit-content"
              bground="transparent"
              padding="5px 0"
            >
              Activities:
            </Title>
            <Ul>
              {detail[0].activities.map((a) => (
                <Li key={Math.random(0,10)} style={{ margin: "0 10px 0 0" }}>{a.name}</Li>
              ))}
            </Ul>
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper height="fit-content">
          <Loading />
          <Title bground="transparent">Loading...</Title>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default Detail;
