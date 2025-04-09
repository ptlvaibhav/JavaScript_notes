const appUser = new Object(); //Singleton

appUser.id = "123abc";
appUser.name = "Vaibhav";
appUser.email = "vaibhav@gmail.com";

console.log(appUser);

const user = {
    email:"email@mail.com",
    fullname:{
        userFullName: {
            firstname:"Vaibhav",
            lastname:"Patel"
        }
    }
}
console.log(user.fullname.userFullName.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
      id:1,
      email:"email@mail.com"
    },
    {
        id:1,
        email:"email@mail.com"
    },
    {
        id:1,
        email:"email@mail.com"
    },
];

users[1].email;
console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('email'));
