const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
   Name: String,
   Description: String,
   URL: {
      type: String,
      required: true,
      unique: true,
   },
})

module.exports = mongoose.model('ImageSchema', ImageSchema);