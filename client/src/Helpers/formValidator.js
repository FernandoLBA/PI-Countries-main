const regex = {
  name: /^[a-zA-ZA-y\s]{3,80}$/, // solo letras, de 3 a 80 caracteres
  difficulty: /^\d{1}$/, // solo números, mínimo 1 caracter
  duration: /^\d{1,365}$/, // solo números, de 1 a 365 caracteres
//   season: /^[a-zA-ZA-y\s]{3,80}$/,
//   countries: /^[a-zA-ZA-y\s]{3,80}$/,
};

export const formValidator = (e, error, setError) => {
  try {
    switch (e.target?.name) {
      case "name":
        if (!regex.name.test(e.target.value.trim())) {
          return setError({
            ...error,
            name: "Don't type numbers or special characters",
          });
        }
        return setError({ ...error, name: "" });

      case "difficulty":
        if (!e.target.value) {
          return setError({
            ...error,
            difficulty: "Please select a difficulty value between 1 and 5",
          });
        }
        return setError({ ...error, difficulty: "" });

      case "duration":
        if (!regex.duration.test(e.target.value.trim())) {
          return setError({
            ...error,
            duration: "Please only type numbers",
          });
        }
        return setError({ ...error, duration: "" });

      case "season":
        console.log(e.target.value);
        if (e.target.value === "Select here...") {
          return setError({
            ...error,
            season: "Please select a season",
          });
        }
        return setError({ ...error, season: "" });

      case "countries":
           console.log(e.target.value);
        if (e.target.value === "Select here...") {
          return setError({
            ...error,
            countries: "Please select one or more countries",
          });
        }
        return setError({ ...error, countries: "" });

      default:
        return {
          name: "",
          difficulty: "",
          duration: "",
          season: "",
          countries: "",
        };
    }
  } catch (error) {
    console.log(error);
  }
};
