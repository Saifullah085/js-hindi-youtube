const marvel_heroes = ["thor", "Ironmsn", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

//  const allHeroes = marvel_heroes.concat(dc_heroes); //used to assign both in new variable bcx in this it shows 1 of them not both
// console.log(allHeroes);

// const all__new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all__new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("saif"));
console.log(Array.from("saif"));
console.log(Array.from({name: "saif"}));           //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //used to create an array of given values


