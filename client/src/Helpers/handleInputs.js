export const handleInputs = (e, setInputs, inputs) => {
  try {
    setInputs({
      ...inputs,
      [e.target.name]:
        e.target.name === "countries" && e.target.value !== "Select here..."
          ? !inputs.countries.includes(e.target.value)
            ? [...inputs.countries, e.target.value]
            : [...inputs.countries]
          : e.target.value,
    });
  } catch (error) {
    console.log(error);
  }
};

// setInputs({
//   ...inputs,
//   [e.target.name]:
//     e.target.name === "countries"
//       ? !inputs.countries.includes(e.target.value)
//         ? [...inputs.countries, e.target.value]
//         : [...inputs.countries]
//       : e.target.value,
// });