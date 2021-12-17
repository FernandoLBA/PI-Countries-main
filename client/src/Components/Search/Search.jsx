import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { searchValidator } from "../../Helpers/searchValidator";
import { getCountryByName } from "../../Redux/Actions/countriesActions";
import { Button } from "../../StyledComponents/Button";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValidator(input.trim(), setError)) {
      setInput("");
      dispatch(getCountryByName(input));
    }
  };

  useEffect(() => {
    searchValidator(input, setError);
  }, [input]);

  return (
    <Wrapper flex="flex" width="fit-content">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          className={error ? "danger" : ""}
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search here..."
        />
        <Button id="btn" disabled type="submit" margin="0 15px">
          Search
        </Button>
        {error && (
          <p
            style={{
              position: "absolute",
              color: "crimson",
              marginTop: "5px",
              fontSize: ".8em",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </Wrapper>
  );
};

export default Search;
