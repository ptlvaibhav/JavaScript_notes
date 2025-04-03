let score = "33";

console.log(typeof score); //type of score
// console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber);

/*
if score = "25"

outputs:

console.log(typeof score); 
=> string
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> 25

*/

/*
if score = "25abc"

outputs:

console.log(typeof score); 
=> string
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> NaN

*/

/*
if score = null

outputs:

console.log(typeof score); 
=> object
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> 0

*/

/*
if score = undefined

outputs:

console.log(typeof score); 
=> undefined
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> NaN

*/

/*
if score = true/false

outputs:

console.log(typeof score); 
=> boolean
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> 1/0

*/

/*
if score = "Vaibhav"

outputs:

console.log(typeof score); 
=> string
console.log(typeof valueInNumber);
=> number
console.log(valueInNumber);
=> NaN

*/

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*

1/0 => true/false;
"" => false;
"anything" => true;

*/

let rollNo = 104;
let stringRollNo = String(rollNo);
console.log(typeof stringRollNo);

//******************** Operations ********************

let value = 5;
let negValue = -value;
console.log(negValue); // -5

// console.log(2+2); // Add
// console.log(2-2); // Sub
// console.log(2*2); // Multiplictaion
// console.log(2**2); // Power
// console.log(2/2); // Divide
// console.log(2%2);// Remainder

let str1 = "Hello!";
let str2 = "Vaibhav";
let str3 = str1 + " " + str2;
console.log(str3); // Hello! Vaibhav
// console.log(str1 + " " + str2); // Hello! Vaibhav

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
// console.log(true+); //ERROR
console.log(+""); //0
