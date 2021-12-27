// recibe el evento, y el state inputs
export const handleInputs = (e, setInputs, inputs) => {
  try {
    setInputs({
      ...inputs,
      [e.target.name]:
        e.target.value === "Select here..."
          ? [...inputs.countries]
          : e.target.name === "countries"
          ? !inputs.countries.includes(e.target.value)
            ? [...inputs.countries, e.target.value]
            : [...inputs.countries]
          : e.target.value,
    });
  } catch (error) {
    console.log(error);
  }
};