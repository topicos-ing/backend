const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  gtin: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  },
  linkType: {
    type: String,
    required: false
  },
  acceptLanguage : {
    type: String,
    require: false
  }
}, { versionKey: false});

module.exports = mongoose.model('Links', linkSchema, 'links');
