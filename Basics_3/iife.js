// Immediately Invoked Function Expressions (IIFE)

/*

    Global scope na pollution thi problem thai ghani vaar toh ee global scope na variables k j bhi declaration ne kadhva mate iife nu use thai che

*/

//Named iife
(function iifeFunction(){
    console.log(`DB Connected!`);
})(); //necessary to end with ;(semicolon) explicitly


(() =>{
    console.log(`DB Connected!`);
    
})();

((name) =>{
    console.log(`${name}'s DB is Connected! `);
    
})("Vaibhav");