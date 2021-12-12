const { Router } = require("express");
const {
  getCountries,
  getCountryById,
} = require("../controllers/countriesController");
const router = Router();
// const { Country, Activity } = require("../db");

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const countries = await getCountries(name);
    return countries
      ? res.send(countries)
      : res.send("No results for your search.");
  }
  const countries = await getCountries();
  return countries ? res.send(countries) : res.sendStatus(404);
});

router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  const country = await getCountryById(id);
  return country ? res.send(country) : res.send("Country not found");
});

module.exports = router;
