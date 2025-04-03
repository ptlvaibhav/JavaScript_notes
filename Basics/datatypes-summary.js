//JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable.

// Primitive Data Types
//( They are Call by Value. )
// 7 types : String, Number, Boolean, undefined, null, BigInt, Symbol

/*

const score = 25;
const scoreValue = 25.11;

const isLoggedIn = false;
const outsideTemp = null;
let mail;

const id = Symbol('1234');
const anotherId = Symbol('1234');

const bigIntValue = 123456789012345678901234567890n;
 
*/

//Non-Primitive Data Types (refrence type )
//( They are Call by Reference. )
// 3 type : Array, Object, Functions

/*

const heros = ["Ironman", "Spiderman", "Batman", "Superman"];

const myObj = {
    name: "Vaibhav",
    age: 20,
    isLoggedIn: false,
    score: 25.11
};

const myFunction = function() {
    console.log("Hello World!");
};

console.log(typeof myObj); //object

*/

/*

Runtime Semantics: Evaluation
UnaryExpression : typeof UnaryExpression

1. If val is undefined, return "undefined".
2. If val is null, return "object".
3. If val is a String, return "string".
4. If val is a Symbol, return "symbol".
5. If val is a Boolean, return "boolean".
6. If val is a Number, return "number".
7. If val is a BigInt, return "bigint".

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non - Primitive);

let name = "Vaibhav";
let myName = name;
myName = "Vaibhav Patel";

console.log(name); // Vaibhav
console.log(myName); // Vaibhav Patel

let user = { mail: "vaibhav@mail.com", upi: "vaibhav@okaxis" };
let myUser = user;
myUser.mail = "vaibhavpatel@gmail.com";

console.log(user.mail); // vaibhavpatel@gmail.com
console.log(myUser.mail); // vaibhavpatel@gmail.com
