// Singleton (by Constructor)

// Object.create

const mySym = Symbol("key1")

//Object literals

const JsUser = {
    //key : value
    name: "Vaibhav",
    "full Name":"Vaibhav Patel",
    age:20,
    [mySym]:"mykey1" ,
    location:"Valsad",
    email: "vaibhav@mail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}; 

console.log(JsUser.email);
// console.log(JsUser.full Name); //not possible
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "vaibhavpatel@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "vaibhav@mail.com";
console.log(JsUser);
JsUser.greet = function(params) {
    console.log("Hello JsUser");   
}

JsUser.greet2 = function(params) {
    console.log(`Hello ${this.name}`);   
}
console.log(JsUser.greet());
console.log(JsUser.greet2());
