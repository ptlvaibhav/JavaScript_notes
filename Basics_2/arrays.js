// Array
const myArr = [0, 1, 2, 3, 4, 5];
const myBikes = ["S1000RR", "ZX10R", "GT650"];
const arr = new Array(1, 2, 3, 4);
console.log(arr[0]);

// Array methods 

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(typeof newArr);

console.log(myArr);

// slice, splice

console.log("A", myArr);

const myna1 = myArr.slice(1,3);
console.log(myna1);
console.log("B ",myArr);

const myna2 = myArr.splice(1,3); // manipulate original array
console.log(myna2);
console.log("C ",myArr);
