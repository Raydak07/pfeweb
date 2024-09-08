const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let Post = new Schema({
  email: { type: String },
  motdepasse: { type: String }


}, {
  collection: 'posts'
})
  
module.exports = mongoose.model('Post', Post)