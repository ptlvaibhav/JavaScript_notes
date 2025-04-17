const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`Acc : ${acc}, Current : ${currval}`);    
//     return acc+currval;
// },5);

const myTotal = myNums.reduce((acc,currval) => acc+currval,0);
// {
//     console.log(`Acc : ${acc}, Current : ${currval}`);    
//     return ;
// },5);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 1999
    },
    {
        itemName: "Data Science course",
        price: 3999
    },
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);