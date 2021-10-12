const mongoose = require('mongoose');

module.exports = mongoose.model(
  'afk',
  new mongoose.Schema({
    userId: String,
    guildId: String,
    reason: String,
    timestamp: Number,
  })
)