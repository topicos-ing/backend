const mongoose = require("mongoose");

const linkTypeSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, { versionKey: false});

module.exports = mongoose.model('LinkTypes', linkTypeSchema, 'linkTypes');
