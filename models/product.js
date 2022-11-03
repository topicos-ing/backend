const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  gtin: {
    type: Number,
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
});

module.exports = mongoose.model('Products', productSchema, 'products');