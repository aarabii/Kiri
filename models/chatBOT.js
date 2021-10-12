const mongoose = require('mongoose');

module.exports = mongoose.model(
  'chatBOT',
  new mongoose.Schema({
    channelId: String,
    guildId: String,
  })
)