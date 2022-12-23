const { Router } = require('express');
const pokemonRoute = require('./pokemon.route.js');
const router = Router();

router.use('/pokemon', pokemonRoute);

module.exports = router;
