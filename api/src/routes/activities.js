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
  const { id, activities } = req.body;
  await postActivity(id, activities);

  res.send("Activity created");
});

module.exports = router;
