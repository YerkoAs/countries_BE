const express = require('express');
const router = express.Router();
const routerCountry = require('./country.router');

// colocar las rutas aquí
router.use('/countries', routerCountry)

module.exports = router;