const express = require('express');
const Notification = require('../model/Notification');
const notificationRoute = express.Router();
  





/* Add Notification */
notificationRoute.post('/notifications/create', async (req, res, next) => {
  try {
    const notification = await Notification.create(req.body);
    res.json(notification);
  } catch (error) {
    next(error);
  }
});
  
/* Get all Notifications*/
notificationRoute.get('/notifications', async (req, res, next) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    next(error);
  }
});
  
/* Get Notification by ID */
notificationRoute.get('/notifications/:id', async (req, res, next) => {
  try {
    const notification = await Notification.findById(req.params.id);
    res.json(notification);
  } catch (error) {
    next(error);
  }
});
  
/* Update Notification */
notificationRoute.put('/notifications/:id', async (req, res, next) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(updatedNotification);
  } catch (error) {
    next(error);
  }
});
  
/* Delete Notification */
notificationRoute.delete('/notifications/:id', async (req, res, next) => {
  try {
    const deletedNotification = await Notification.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: 'Notification deleted successfully' });
  } catch (error) {
    next(error);
  }
});
  
module.exports = notificationRoute;