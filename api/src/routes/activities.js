const {Router} = require("express");
const postActivity = require("../controllers/activitiesController");
const router = Router();

router.post("/activities", async (req, res) => {
     const{id, activities} = req.body;
     await postActivity(id, activities);
     
     res.send("Activity created");
})

module.exports = router;