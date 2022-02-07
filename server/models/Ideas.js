const { Schema, model } = require("mongoose");

const ideasSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  additionalInfo: String,
  documents: String,
});

const Ideas = module("ideas", ideasSchema);

module.exports = Ideas;
