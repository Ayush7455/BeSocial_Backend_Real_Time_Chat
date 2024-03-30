const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Messages = mongoose.model('Messages');

router.get('/getMessages/:room', async (req, res) => {
  const room = req.params.room;

  try {
    const roomMessages = await Messages.findOne({ room: room });

    if (!roomMessages) {
      return res.status(404).json({ message: 'Room not found' });
    }

    const messages = roomMessages.messages;

    return res.status(200).json({ messages: messages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;