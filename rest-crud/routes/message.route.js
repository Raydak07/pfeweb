const express = require('express');
const Message = require('../model/Message');
const messageRoute = express.Router();
  

const Notification = require('../model/Notification');





/* Add Message */
messageRoute.post('/messages/create', async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.json(message);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Messages*/
messageRoute.get('/messages', async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});
  
/* Get Message by ID */
messageRoute.get('/messages/:id', async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json(message);
  } catch (error) {
    next(error);
  }
});
  
/* Update Message */
messageRoute.put('/messages/:id', async (req, res, next) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedMessage);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Message */
messageRoute.delete('/messages/:id', async (req, res, next) => {
  try {
    const deletedMessage = await Message.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Message deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = messageRoute;