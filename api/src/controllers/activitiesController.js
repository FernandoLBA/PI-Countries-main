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
  { name, difficulty, duration, season, countries }
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

module.exports = { postActivity, getActivities };