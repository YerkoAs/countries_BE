const { getAll, getInfo } = require('../controllers/country.controllers');
const express = require('express');

const routerCountry = express.Router();

routerCountry.route('/')
    .get(getAll)

routerCountry.route('/:data1/:data2/:data3?')
    .get(getInfo)
    

module.exports = routerCountry;