const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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
  language : {
    type: String,
    require: false
  }
}, { versionKey: false});

module.exports = mongoose.model('Products', productSchema, 'products');
