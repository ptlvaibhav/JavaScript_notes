const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.456789;
console.log(otherNumber.toPrecision(5));

const num1 = 1000000000;
console.log(num1.toLocaleString()); // According to US Standards
console.log(num1.toLocaleString("en-IN")); // According to INDIAN Standards

// ++++++++++++++++++++ Math ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(10.4));
console.log(Math.ceil(10.4));
console.log(Math.floor(10.4));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.max(10, 20, 30, 40, 50));

console.log(Math.random()); // 0 to 1
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // min to max
