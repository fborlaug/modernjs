const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
   res.json(tvShowService.getAll());
 });
 
 module.exports = tvShowRouter