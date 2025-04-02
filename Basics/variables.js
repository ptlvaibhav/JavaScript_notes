const id = 123456;
let mail = "abc@mail.com";
var pass = "123456";
city = "Valsad";
let state;

//const is immutable
// id = 2; // will give error.

/*
Prefer not to use var. Use let and const instead.
(bcoz issue in block scope and functional scole.
var is function scoped, let is block scoped.)
const is used for constant values, which are not going to change.
let is mutable and can be changed.
*/

mail = "cba@mail.com";
pass = "147";
city = "Surat";
console.log(city);
console.table([id, mail, pass, city, state]);
