export const handleInputs = (e, setInputs, inputs) => {
  setInputs({
    ...inputs,
    [e.target.name]:
      e.target.name === "countries"
        ? !inputs.countries.includes(e.target.value)
          ? [...inputs.countries, e.target.value]
          : [...inputs.countries]
        : e.target.value,
  });
};
