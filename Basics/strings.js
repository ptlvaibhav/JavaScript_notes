const name = "Vaibhav";
const score = 25;

// console.log("My name is " + name + " and my score is " + score); //My name is Vaibhav and my score is 25

//String Interpolation
console.log(`My name is ${name} and my score is ${score}`); //My name is Vaibhav and my score is 25

const gameName = new String("World-Cricket-Championship");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newGameName = gameName.substring(6, 13); //13th index is not included
console.log(newGameName);

const newGameName2 = gameName.slice(-26, 5);
console.log(newGameName2);

const newString = "   Hello World!   ";
console.log(newString);
console.log(newString.trim()); // removes whitespace from both sides of a string
// console.log(newString.trimStart());
// console.log(newString.trimEnd());

const url = "https://vaibhav.com/vaibhav%20patel";
const newUrl = url.replace("%20", "-");
console.log(newUrl);
console.log(url.includes("vaibhav"));

console.log(gameName.split("-"));
