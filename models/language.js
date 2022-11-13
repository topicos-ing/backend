const mongoose = require("mongoose");

const languageSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
}, { versionKey: false});

module.exports = mongoose.model('Languages', languageSchema, 'languages');
