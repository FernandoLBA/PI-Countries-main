const { Country, Activity } = require("../db");

const getActivities = async () => {
  try {
    const activities = await Activity.findAll();
    return activities;
  } catch (error) {
    return error;
  }
};

const postActivity = async (
  countries,
  { name, difficulty, duration, season }
) => {
  try {
    for (let i = 0; i < countries.length; i++) {
      const [newActivity] = await Activity.findOrCreate({
        where: { name },
        defaults: {
          name,
          difficulty,
          duration,
          season,
        },
      });

      const country = await Country.findByPk(countries[i]);
      country.addActivity(newActivity);
    }
  } catch (error) {
    console.log(error);
  }
};
// const postActivity = (idCountry, activities) => {
//   try {
//     activities.map(async (a) => {
//       const [newActivity] = await Activity.findOrCreate({
//         where: { name: a.name },
//         defaults: {
//           name: a.name,
//           difficulty: a.difficulty,
//           duration: a.duration,
//           season: a.season,
//         },
//       });

//       let countryBD = await Country.findByPk(idCountry);
//       countryBD.addActivity(newActivity);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { postActivity, getActivities };
