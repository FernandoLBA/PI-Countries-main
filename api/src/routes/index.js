const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("../routes/countries");
const activities = require("../routes/activities");
const cors = require("cors");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(cors());
router.use(countries);
router.use(activities);


module.exports = router;
