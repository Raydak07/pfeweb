const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Company = new Schema({
  email: { type: String },
  motdepasse: { type: String }


}, {
  collection: 'companys'
})
  
module.exports = mongoose.model('Company', Company)