//Dates

let myDate = new Date();
console.log(myDate.toString()); // Mon Apr 07 2025 21:12:34 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString); // [Function: toDateString]
console.log(myDate.toISOString()); // 2025-04-07T21:12:34.770Z
console.log(myDate.toJSON()); // 2025-04-07T21:12:34.770Z
console.log(myDate.toLocaleDateString()); // 4/7/2025
console.log(myDate.toLocaleString()); // 4/7/2025, 9:12:34 PM
console.log(typeof myDate); // Object


let myCreatedDate = new Date(2025,3,8);
console.log(myCreatedDate.toDateString()); // Tue Apr 08 2025

let myCreatedDate2 = new Date(2025,3,8,3,38);
console.log(myCreatedDate2.toLocaleString()); // 4/8/2025, 3:38:00 AM

// let myCreatedDate3 = new Date("2025-3-8");
let myCreatedDate3 = new Date("04-8-2025");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
// console.log(`${newDate.getDate()} day of the Week`);

newDate.toLocaleString('default',{
    weekday:"long"
});