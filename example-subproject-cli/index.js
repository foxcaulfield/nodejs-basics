#!/usr/bin/env node

const yargs = require("yargs");

const y = yargs(process.argv);
// console.log(y.argv);

const printPokemonMoves = async (pokemonName) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await result.json();
    const moves = data.moves.map(move => move.move.name);
    console.log(moves);
}

printPokemonMoves(y.argv.pokemon);

// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv0);
// console.log(y);
// console.log(y.argv);