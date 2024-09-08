const express = require('express');
const Company = require('../model/Company');
const companyRoute = express.Router();
  

const Notification = require('../model/Notification');





/* Add Company */
companyRoute.post('/companys/create', async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Companys*/
companyRoute.get('/companys', async (req, res, next) => {
  try {
    const companys = await Company.find();
    res.json(companys);
  } catch (error) {
    next(error);
  }
});
  
/* Get Company by ID */
companyRoute.get('/companys/:id', async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (error) {
    next(error);
  }
});
  
/* Update Company */
companyRoute.put('/companys/:id', async (req, res, next) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedCompany);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Company */
companyRoute.delete('/companys/:id', async (req, res, next) => {
  try {
    const deletedCompany = await Company.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Company deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = companyRoute;