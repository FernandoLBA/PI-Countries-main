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

router.post("/activity", async (req, res) => {
  await postActivity(req.body);
  
  res.send("Activity created succesfully");
});

module.exports = router;
