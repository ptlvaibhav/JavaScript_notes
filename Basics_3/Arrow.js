const user = {
    username: "Vaibhav",
    balance: 10000000000,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the Website`);
        console.log(this); 
    }
}

user.welcomeMessage()
// user.username = "uname";
// user.welcomeMessage();

// console.log(this); // {}

// function chai(){
//     let uname = "Vaibhav"
//     // console.log(this.uname);  // undefined   
// }
// chai();

const chai = () => {
    let uname = "Vaibhav"
    console.log(this); // undefined 
}
// chai();

// () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

//implicit return

// const addTwo = (num1,num2) => num1 + num2;
const addTwo = (num1,num2) => ( num1 + num2 );
// const handleObject = () => ({uname:"Vaibhav"});

console.log(addTwo(5,10));

// const arr = [5, 8, 4, 2]
// arr.forEach(() => {})