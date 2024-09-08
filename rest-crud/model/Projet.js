const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Projet = new Schema({
  nom: { type: String },
  description: { type: String },
  specialite: { type: String },
  etat: { type: String },
  datedebut: { type: String },
  datefin: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'projets'
})
  
module.exports = mongoose.model('Projet', Projet)