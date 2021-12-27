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
import { Form } from "../../StyledComponents/Form";
import { Input } from "../../StyledComponents/Input";
import { Option } from "../../StyledComponents/Option";
import { Paragraph } from "../../StyledComponents/Paragraph";
import { Select } from "../../StyledComponents/Select";
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
    season: "Select here...",
    countries: [],
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const handleInput = (e) => {
    try {
      handleInputs(e, setInputs, inputs);
      formValidator(e, error, setError, inputs.countries.length);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTags = (e) => {
    setInputs({
      ...inputs,
      countries: inputs.countries.filter((c) => c !== e.target.name),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    function required() {
      if (!inputs.name) {
        setError({ ...error, name: "This field cannot be empty" });
      } else if (!inputs.duration) {
        setError({ ...error, duration: "This field cannot be empty" });
      } else if (inputs.season === "Select here...") {
        setError({ ...error, season: "Please select one season" });
      } else if (!inputs.countries.length) {
        setError({
          ...error,
          countries: "Please select one or more countries",
        });
      } else {
        return true;
      }
      return false;
    }

    if (
      !error.name &&
      !error.difficulty &&
      !error.duration &&
      !error.season &&
      !error.countries &&
      required()
    ) {
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
    return async () => {
      await dispatch(getCountries());
      await dispatch(getActivities());
    };
  }, [dispatch]);

  return (
    <Wrapper
      flex="flex"
      aItems="center"
      width="100vw"
      height="100vh"
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
        <Title bground="transparent" padding="0 0 50px 0">
          Create your activity:
        </Title>
        <Form onSubmit={handleSubmit} width="40%">
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Name
          </Title>
          <Input
            className={error.name ? "error" : ""}
            id="name"
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleInput}
          />
          {error.name && (
            <Paragraph margin="10px" className="error">
              {error.name}
            </Paragraph>
          )}
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Difficulty
          </Title>
          <Wrapper
            width="100%"
            height="fit-Content"
            flex="flex"
            jContent="space-between"
            bRadius="0"
          >
            <Input
              className={error.difficulty ? "error" : ""}
              name="difficulty"
              type="range"
              min="1"
              max="5"
              width="95%"
              value={inputs.difficulty}
              onChange={handleInput}
            />
            <Span color="chocolate" fWeight="bold">
              {inputs.difficulty}
            </Span>
          </Wrapper>
          {error.difficulty && (
            <Paragraph margin="10px" className="error">
              {error.difficulty}
            </Paragraph>
          )}
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Duration
          </Title>
          <Input
            className={error.duration ? "error" : ""}
            name="duration"
            type="text"
            value={inputs.duration}
            onChange={handleInput}
          />
          {error.duration && (
            <Paragraph margin="10px" className="error">
              {error.duration}
            </Paragraph>
          )}
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Season
          </Title>
          <Select
            className={error.season ? "error" : ""}
            name="season"
            id="season"
            onChange={handleInput}
            value={inputs.season}
          >
            <Option>Select here...</Option>
            <Option value="Autumn">Autumn</Option>
            <Option value="Winter">Winter</Option>
            <Option value="Spring">Spring</Option>
            <Option value="Summer">Summer</Option>
          </Select>
          {error.season && (
            <Paragraph margin="10px" className="error">
              {error.season}
            </Paragraph>
          )}
          <Title
            tAlign="left"
            color="Chocolate"
            padding="10px 0"
            bground="transparent"
          >
            Countries
          </Title>
          <Select
            className={error.countries ? "error" : ""}
            name="countries"
            id="countries"
            onChange={handleInput}
          >
            <Option>Select here...</Option>
            {countries.map((c) => (
              <Option key={c.id} value={c.id}>
                {c.name}
              </Option>
            ))}
          </Select>
          {error.countries && (
            <Paragraph margin="10px" className="error">
              {error.countries}
            </Paragraph>
          )}
          {/* TAGS */}
          <Wrapper
            bRadius="0"
            padding="15px 0"
            width="100%"
            flex="flex"
            height="fit-content"
          >
            {inputs.countries?.map((c) => (
              <Button
                key={c}
                name={c}
                color="red"
                margin="0 10px 10px 0"
                onClick={handleTags}
                bground={`url("${
                  countries?.find((country) => country.id === c)?.flags
                }") no-repeat center/100%`}
              >
                REMOVE
              </Button>
            ))}
          </Wrapper>

          <Wrapper width="100%" flex="flex" height="fit-content">
            <Button type="submit" margin="10px 0 0 0">
              create
            </Button>
          </Wrapper>
        </Form>
      </Wrapper>
    </Wrapper>
  );
};

export default Create;
