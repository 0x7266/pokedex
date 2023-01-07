const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  id: Number,
  name: String,
  types: [Object],
  height: Number,
  weight: Number,
  abilities: [],
  gif: String,
  image: String,
});

module.exports = model("Pokemon", pokemonSchema);
