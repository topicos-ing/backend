const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    id: {
    type: String,
    required: true,
  },
  gtin: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
}});

module.exports = mongoose.model('Data', DataSchema, 'proveedores');