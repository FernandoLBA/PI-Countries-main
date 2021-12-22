import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formValidator } from "../../Helpers/formValidator";
import { handleInputs } from "../../Helpers/handleInputs";
import {
  getActivities,
  setActivities,
} from "../../Redux/Actions/activitiesActions";
import { getCountries } from "../../Redux/Actions/countriesActions";
import { Button } from "../../StyledComponents/Button";
import { Span } from "../../StyledComponents/Span";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Create = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    difficulty: "1",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidator()) {
      try {
        await dispatch(setActivities(inputs));
        alert("Activity created succesfully");
        setInputs({
          name: "",
          difficulty: "1",
          duration: "",
          season: "",
          countries: [],
        });
        document.getElementById("countries").value = "Select here...";
        document.getElementById("name").select();
      } catch (error) {
        alert(error);
        document.getElementById("name").select();
      }
    }
  };

  useEffect(() => {
    return () => {
      dispatch(getCountries());
      dispatch(getActivities());
    };
  }, [dispatch]);

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
        <Title bground="transparent" padding="0 0 50px 0">
          Create your activity:
        </Title>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Name
          </Title>
          <input
            id="name"
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
            Difficulty
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
            Duration
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
            Season
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
            <option>Select here...</option>
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
          <Button type="submit" margin="10px 0 0 0">
            create
          </Button>
        </form>
      </Wrapper>
    </Wrapper>
  );
};

export default Create;
