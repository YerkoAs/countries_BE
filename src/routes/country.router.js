const { getAll, getInfo } = require('../controllers/country.controllers');
const express = require('express');

const routerCountry = express.Router();

routerCountry.route('/:data1/:data2?')
    .get(getAll)

routerCountry.route('/:data1/:data2?')
    .get(getInfo)
    

module.exports = routerCountry;