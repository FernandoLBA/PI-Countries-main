import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchValidator } from "../../Helpers/searchValidator";
import { getCountryByName } from "../../Redux/Actions/countriesActions";
import { Button } from "../../StyledComponents/Button";
import { Form } from "../../StyledComponents/Form";
import { Input } from "../../StyledComponents/Input";
import { Paragraph } from "../../StyledComponents/Paragraph";
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
      <Form onSubmit={handleSubmit}>
        <Input
          id="search"
          name="search"
          className={error ? "error" : ""}
          type="text"
          width="61%"
          value={input}
          onChange={handleInput}
          placeholder="Search here..."
        />
        <Button id="btn" disabled type="submit" margin="0 15px">
          Search
        </Button>
        {error && (
          <Paragraph
          className="error"
          margin="10px 0 0"
          >
            {error}
          </Paragraph>
        )}
      </Form>
    </Wrapper>
  );
};

export default Search;
