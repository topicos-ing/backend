const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
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
  }
});

module.exports = mongoose.model('Products', productSchema, 'products');