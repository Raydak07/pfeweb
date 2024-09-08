const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Postuler = new Schema({
    nom: { type: String },
    prenom: { type: String },
    diplome: { type: String },
    texte: { type: String },
    datecreation: { type: String },
    datemodification: { type: String }


}, {
  collection: 'postulers'
})
  
module.exports = mongoose.model('Postuler', Postuler)