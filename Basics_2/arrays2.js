const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allHeros = [...marvel_heros, ...dc_heros];
console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const anyArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const anyArray2 = anyArray.flat(Infinity);
console.log(anyArray2); // [ 1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Vaibhav"));
console.log(Array.from("Vaibhav"));
// console.log(Array.from({name: "Vaibhav"})); //{key:"value"} // we have to specify that we want array from key or value

let score1 = 200;
let score2 = 300;
let score3 = 100;

console.log(Array.of(score1,score2,score3));
