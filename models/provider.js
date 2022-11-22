const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  providerName: {
    type: String,
    required: true
  },
  products: [mongoose.Schema.Types.Mixed]
}, { versionKey: false });

module.exports = mongoose.model('Providers', providerSchema, 'providers');
