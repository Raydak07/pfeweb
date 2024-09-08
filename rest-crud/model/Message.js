const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Message = new Schema({
  nomenvoi: { type: String },
  sujet: { type: String },
  texte: { type: String },
  etat: { type: String },
  datecreation: { type: String },
  datemodification: { type: String }


}, {
  collection: 'messages'
})
  
module.exports = mongoose.model('Message', Message)