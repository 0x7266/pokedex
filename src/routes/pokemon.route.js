const { Router } = require('express');
const {
  getPokemon,
  getPokemons,
  createPokemon,
  deletePokemon,
  editPokemon,
} = require('../controllers/pokemon.controller');
const router = Router();

router.route('/').get(getPokemons); //.post(createPokemon);
router.route('/:id').get(getPokemon); //.patch(editPokemon).delete(deletePokemon);

module.exports = router;
