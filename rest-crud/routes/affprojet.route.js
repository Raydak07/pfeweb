const express = require('express');
const Affprojet = require('../model/Affprojet');
const affprojetRoute = express.Router();
  

const Notification = require('../model/Notification');





/* Add Affprojet */
affprojetRoute.post('/affprojets/create', async (req, res, next) => {
  try {
    const affprojet = await Affprojet.create(req.body);
    res.json(affprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Affprojets*/
affprojetRoute.get('/affprojets', async (req, res, next) => {
  try {
    const affprojets = await Affprojet.find();
    res.json(affprojets);
  } catch (error) {
    next(error);
  }
});
  
/* Get Affprojet by ID */
affprojetRoute.get('/affprojets/:id', async (req, res, next) => {
  try {
    const affprojet = await Affprojet.findById(req.params.id);
    res.json(affprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Update Affprojet */
affprojetRoute.put('/affprojets/:id', async (req, res, next) => {
  try {
    const updatedAffprojet = await Affprojet.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedAffprojet);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Affprojet */
affprojetRoute.delete('/affprojets/:id', async (req, res, next) => {
  try {
    const deletedAffprojet = await Affprojet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Affprojet deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = affprojetRoute;