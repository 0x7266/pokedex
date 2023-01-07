const Pokemon = require("../models/pokemon.model");

module.exports = {
  getPokemons: async (req, res) => {
    try {
      const types = [
        "bug",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "ghost",
        "grass",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "water",
        "fairy",
        "fighting",
        "flying",
        "grass",
        "ground",
        "ice",
        "poison",
        "psychic",
        "rock",
        "steel",
        "water",
      ];
      const count = await Pokemon.countDocuments();
      let limit = parseInt(req.query.limit) || 20;
      let page = parseInt(req.query.page) - 1 || 0;
      const weight = parseInt(req.query.weight) || 0;
      const search = req.query.search || "";
      let type = req.query.type || "all";
      type === "all" ? (type = [...types]) : (type = req.query.type.split(","));
      if (type.length < types.length) {
        limit = count;
        page = 0;
      }
      const pokemons = await Pokemon.find({
        name: { $regex: search, $options: "i" },
      })
        .where("types.type.name")
        .in([...type])
        .skip(page * limit)
        .limit(limit);
      const response = {
        count,
        page: page + 1,
        limit,
        results: pokemons.length,
        pokemons,
      };
      res.json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getPokemon: async (req, res) => {
    try {
      const response = await Pokemon.findOne({ id: req.params.id });
      res.json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  createPokemon: async (req, res) => {
    try {
      const response = await Pokemon.create(req.body);
      res.json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  editPokemon: async (req, res) => {
    try {
      const response = await Pokemon.find();
      res.json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  deletePokemon: async (req, res) => {
    try {
      const response = await Pokemon.find();
      res.json(response);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
