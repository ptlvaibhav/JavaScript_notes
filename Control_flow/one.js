// if
const isUserloggedIn = true

if(isUserloggedIn){}

const temperature = 41;
// if (temperature === 41) {
//     console.log("<50");
// } else {
//     console.log(">50");
// }

// const score = 200;

// if (score>100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); //error

// const balance = 1000;
// // if(balance >500) console.log("test"); //implicit

// // if(balance >500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userloggedIn && debitCard && 2==2 ){
    console.log("Allow to buy Course");
}

if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User logged in");
}