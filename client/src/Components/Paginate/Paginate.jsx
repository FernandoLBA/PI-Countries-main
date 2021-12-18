import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../Helpers/paginate";
import { Button } from "../../StyledComponents/Button";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Paginate = () => {
  const countries = useSelector(
    (state) => state.countriesReducer.modifiedCountries
  );
  const [pages, setPages] = useState(paginate(countries.length));

  useEffect(() => {
    setPages(paginate(countries?.length));
  }, [countries.length]);

  return (
    <Wrapper
      flex="flex"
      margin="50px 50px 0 50px"
      padding="50px"
      height="fit-content"
      bground="#00000090"
    >
      {pages?.map((p) => (
        <Button key={p} margin="10px" bRadius="50%">
          {p}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Paginate;
