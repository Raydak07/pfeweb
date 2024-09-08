const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Afftache = new Schema({
  nom: { type: String },
  description: { type: String },
  iduser: { type: String },
  idtache: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }



}, {
  collection: 'afftaches'
})
  
module.exports = mongoose.model('Afftache', Afftache)