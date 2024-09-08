const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Notification = new Schema({
    texte: { type: String },
    datecreation: { type: String },
    datemodification: { type: String }


}, {
  collection: 'notifications'
})
  
module.exports = mongoose.model('Notification', Notification)