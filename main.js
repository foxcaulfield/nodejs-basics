const hero = require("./super-hero");

console.log(hero.name);
hero.name = "SuperMan";
console.log(hero.name);

const hero2 = require("./super-hero");
console.log(hero2.name);