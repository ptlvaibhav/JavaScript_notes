let a = 10;
// const b = 20;
// var c = 30; 

if(true){
    let a = 100;
    console.log("Inner:",a);
};

console.log(a);

function one(){
    const username = "Vaibhav";
    function two(){
        const website = "youtube"
        console.log(username);        
    }
    // console.log(website);  
    
    two();
};

one();

if (true){
 const uname = "Vaibhav";
 if (true){
  const web = "youTube" 
  console.log(`${uname} ${web}`);
 }   
//  console.log(web);
};
// console.log(uname);

/* ***  Hoisting  *** */


console.log(addone(5)); //6

function addone(num){
    return num + 1;
}
// addone(5);

// addTwo(5); //Error

const addTwo = function(num){
    return num + 2;
}
// addTwo(5);