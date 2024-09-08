const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Universite = new Schema({
  nom: { type: String },
  description: { type: String },
  adresse: { type: String },
  tel: { type: String },
  email: { type: String },
  siteweb: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'universites'
})
  
module.exports = mongoose.model('Universite', Universite)