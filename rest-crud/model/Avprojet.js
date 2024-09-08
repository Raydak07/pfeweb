const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Avprojet = new Schema({
  nom: { type: String },
  idprojet: { type: String },
  pourcentagevanacement: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }



}, {
  collection: 'avprojets'
})
  
module.exports = mongoose.model('Avprojet', Avprojet)