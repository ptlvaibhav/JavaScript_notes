function sayMyName() {
    console.log("Vaibhav");    
}

// sayMyName();

function addTwoNumber(num1,num2){
    // console.log(num1 + num2);    
    return(num1 + num2);
    // let result = num1 + num2;
    // return result;
}

// addTwoNumber(3,4);
const res = addTwoNumber(5,10);
console.log(res);

function loginUserMessage(username = "User"){

    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter User Name!!");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vaibhav"));

// const message = loginUserMessage("Vaibhav");
// console.log(message);

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 650));

const user ={
    username:"Vaibhav"
}
function handleObject(anyobject){
    console.log(`Username:${anyobject.username}`);
    
}
// handleObject(user);
handleObject({
    username:"User Name"
})

const arr = [200,400,100]
function handleArray(getArray){
    return getArray;
};
// console.log(handleArray(arr));
console.log(handleArray([200,400,100]));
