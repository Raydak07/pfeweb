const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Avtache = new Schema({
  nom: { type: String },
  idtache: { type: String },
  pourcentagevanacement: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'avtaches'
})
  
module.exports = mongoose.model('Avtache', Avtache)