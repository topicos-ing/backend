const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  providerName: {
    type: String,
    required: true
  },
  products: [mongoose.Schema.Types.Mixed]
}, { versionKey: false});

module.exports = mongoose.model('Providers', providerSchema, 'providers');
