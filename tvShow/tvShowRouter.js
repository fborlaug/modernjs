const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();


tvShowRouter.get('/', (req, res) => {
   res.json(tvShowService.getAll());
 });

 tvShowRouter.get('/:tvShowId', (req,res) => {
   const tvShowId = req.params.tvShowId;
   console.log(`Fetching TV Show with id: ${tvShowId}`);
   res.json(tvShowService.getById(tvShowId));
 });

 tvShowRouter.post('/', (req,res) => {
   console.log(req.body)
   const newTvShow = tvShowService.createTvShow(req.body.name, req.body.genre);
   res.json(newTvShow)
 });

 tvShowRouter.delete('/:tvShowId', (req,res) => {
   const tvShowId = req.params.tvShowId;
   console.log(`Deleting TV Show with id: ${tvShowId}`);
   tvShowService.delete(tvShowId);
   res.status(200).end();
 });
 
 module.exports = tvShowRouter