const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountries = async (query) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const { data } = response;
    data.map(async (c) => {
      await Country.findOrCreate({
        where: { name: c.name.official },
        defaults: {
          id: c.cca3,
          name: c.name.official,
          flags: c.flags.png,
          continents: c.continents,
          capital: c.capital || ["none"],
          subregion: c.subregion || "none",
          area: c.area,
          population: c.population,
        },
      });
    });
    console.log("Countries loaded in DB succesfully");

    if (query) {
      const response = await Country.findAll({
        where: { name: { [Op.iLike]: `%${query}%` } },
        // include: {
        //   model: Activity,
        //   attributes: ["name", "difficulty", "duration", "season"],
        //   through: { attributes: [] },
        // },
      });
      return response && response;
    }

    const countriesDB = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    });

    return countriesDB && countriesDB;
  } catch (error) {
    console.log(error);
  }
};

const getCountryById = async (id) => {
  try {
    const country = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    });

    return country && country;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCountries,
  getCountryById,
};
