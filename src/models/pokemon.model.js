const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
  id: Number,
  name: String,
  order: Number,
  base_experience: Number,
  weight: Number,
  height: Number,
  image: String,
  types: [Object],
});

module.exports = model('Pokemon', pokemonSchema);
