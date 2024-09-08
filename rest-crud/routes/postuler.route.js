const express = require('express');
const Postuler = require('../model/Postuler');
const postulerRoute = express.Router();
  

const Notification = require('../model/Notification');





/* Add Postuler */
postulerRoute.post('/postulers/create', async (req, res, next) => {
  try {
    const postuler = await Postuler.create(req.body);
    res.json(postuler);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Postulers*/
postulerRoute.get('/postulers', async (req, res, next) => {
  try {
    const postulers = await Postuler.find();
    res.json(postulers);
  } catch (error) {
    next(error);
  }
});
  
/* Get Postuler by ID */
postulerRoute.get('/postulers/:id', async (req, res, next) => {
  try {
    const postuler = await Postuler.findById(req.params.id);
    res.json(postuler);
  } catch (error) {
    next(error);
  }
});
  
/* Update Postuler */
postulerRoute.put('/postulers/:id', async (req, res, next) => {
  try {
    const updatedPostuler = await Postuler.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedPostuler);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Postuler */
postulerRoute.delete('/postulers/:id', async (req, res, next) => {
  try {
    const deletedPostuler = await Postuler.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Postuler deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = postulerRoute;