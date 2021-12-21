import React, { useState } from "react";
import { useSelector } from "react-redux";
import { handleInputs } from "../../Helpers/handleInputs";
import { Button } from "../../StyledComponents/Button";
import { Span } from "../../StyledComponents/Span";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Create = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const [inputs, setInputs] = useState({
    name: "",
    difficulty: "0",
    duration: "",
    season: "",
    countries: [],
  });

  const handleInput = (e) => {
    handleInputs(e, setInputs, inputs);
  };

  const handleTags = (e) => {
    setInputs({
      ...inputs,
      countries: inputs.countries.filter((c) => c !== e.target.name),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        fDirection="column"
        aItems="flex-start"
        bground="#00000090"
        width="100%"
        padding="50px"
      >
        <Title bground="transparent">Create your activity:</Title>
        <form onSubmit={handleSubmit}>
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Activity Name
          </Title>
          <input
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleInput}
          />
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Activity Difficulty
          </Title>
          <Wrapper width="fit-content" height="fit-Content" flex="flex">
            <input
              style={{ marginRight: "10px" }}
              name="difficulty"
              type="range"
              min="1"
              max="5"
              value={inputs.difficulty}
              onChange={handleInput}
            />
            <Span color="chocolate" fWeight="bold">
              {inputs.difficulty}
            </Span>
          </Wrapper>
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Activity Duration
          </Title>
          <input
            name="duration"
            type="text"
            value={inputs.duration}
            onChange={handleInput}
          />
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Activity Season
          </Title>
          <select
            name="season"
            id="season"
            onChange={handleInput}
            value={inputs.season}
          >
            <option>Select here...</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Countries
          </Title>
          <select name="countries" id="countries" onChange={handleInput}>
            <option value="select">Select here...</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          
          {/* TAGS */}
          <Wrapper
            bRadius="0"
            padding="10px 0"
            width="fit-content"
            flex="flex"
            jContent="flex-start"
            height="fit-content"
          >
            {inputs.countries?.map((c) => (
              <Button
                key={c}
                name={c}
                bground="crimson"
                margin="0 10px 10px 0"
                onClick={handleTags}
              >
                {c}
              </Button>
            ))}
          </Wrapper>
        </form>
        <Button type="submit" margin="20px 0 0 0">create</Button>
      </Wrapper>
    </Wrapper>
  );
};

export default Create;
