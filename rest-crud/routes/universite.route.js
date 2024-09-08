const express = require('express');
const Universite = require('../model/Universite');
const universiteRoute = express.Router();
  

const Notification = require('../model/Notification');





/* Add Universite */
universiteRoute.post('/universites/create', async (req, res, next) => {
  try {
    const universite = await Universite.create(req.body);
    res.json(universite);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Universites*/
universiteRoute.get('/universites', async (req, res, next) => {
  try {
    const universites = await Universite.find();
    res.json(universites);
  } catch (error) {
    next(error);
  }
});
  
/* Get Universite by ID */
universiteRoute.get('/universites/:id', async (req, res, next) => {
  try {
    const universite = await Universite.findById(req.params.id);
    res.json(universite);
  } catch (error) {
    next(error);
  }
});
  
/* Update Universite */
universiteRoute.put('/universites/:id', async (req, res, next) => {
  try {
    const updatedUniversite = await Universite.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedUniversite);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Universite */
universiteRoute.delete('/universites/:id', async (req, res, next) => {
  try {
    const deletedUniversite = await Universite.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Universite deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = universiteRoute;