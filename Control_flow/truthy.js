const userEmail = "user@email.com"

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't got User Email");
}

/* 

// Falsy values:

false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Truthy values

"0", 'false', " ", [], {}, function(){}

*/

// const userEmail = [];

// if (userEmail.length === 0) {
//     console.log("Array is Empty!!");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
}

/*(just for GK)

false == 0;  // true
false == ''; // true
0 == '';     // true

*/

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10; // 5
val2 = null ?? 10; // 10
val3 = undefined ?? 15; // 15
val4 = null ?? 10 ?? 20; // 10

console.log(val4);

// Terniary Operator

// condition ? true : false ;

const price = 100 ;
price >= 80 ? console.log(">= 80") : console.log("<= 80");