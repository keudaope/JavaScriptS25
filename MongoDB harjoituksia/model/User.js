const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,      // ei sallita kahta samaa käyttäjänimeä
    trim: true
  },
  email: {
    type: String,
    required: false,
    trim: true
  },
  password: {
    type: String,
    required: true      // HUOM: Oikeasti tämä pitäisi hashata (bcrypt tms.)
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
