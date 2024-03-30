const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Messages = mongoose.model('Messages');

router.get('/getRooms/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const matchingRooms = await Messages.find({ room: { $regex: email.split('@')[0], $options: 'i' } });

    const roomsWithFirstMessages = matchingRooms.map((room) => ({
      room: room.room,
      firstMessage: room.messages.length > 0 ? room.messages[0] : null,
    }));

    res.status(200).json(roomsWithFirstMessages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
