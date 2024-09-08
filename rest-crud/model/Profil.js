const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Profil = new Schema({
  nom: { type: String },
  prenom: { type: String },
  description: { type: String },
  adresse: { type: String },
  tel: { type: String },
  email: { type: String },
  siteweb: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'profils'
})
  
module.exports = mongoose.model('Profil', Profil)