// recibe el estado local input y la función setError del estado local error
export const searchValidator = (input, setError) => {
  // objeto con la expresión regular a evaluar
  const regex = { search: /^[a-zA-ZA-y\s]{3,80}$/ };
  //   Si tiene mas de 2 caracteres
  if (input.length > 2) {
    if (regex.search.test(input)) {
      setError("");
      document.getElementById("btn").disabled = false;
      return true;
    } else {
      setError("Don't type numbers or special characters");
      document.getElementById("btn").disabled = true;
      return false;
    }
  }

  //   Si tiene menos de 2 caracteres
  if (input.length > 0 && input.length < 3) {
    setError("Please type at least 3 characters");
    document.getElementById("btn").disabled = true;
    return false;
  }
};
