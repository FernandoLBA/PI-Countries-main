const { Router } = require("express");
const {
  postActivity,
  getActivities,
} = require("../controllers/activitiesController");
const router = Router();

router.get("/activities", async (req, res) => {
  const allActivities = await getActivities();

  res.send(allActivities);
});

router.post("/activities", async (req, res) => {
  const { countries, activity } = req.body;
  await postActivity(countries, activity)
  
  res.send("Activity created succesfully");
});

module.exports = router;
