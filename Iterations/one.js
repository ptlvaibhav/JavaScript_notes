//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is Best");
    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 2; j++) {
        // console.log(`Inner Loop: ${j}, Outer loop: ${i}`);
    }    
}

const myArr = ["Flash", "Batman", "Superman"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Deleted ${index}`)
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Deleted ${index}`)
        continue;
    }
    console.log(`Value of i is ${index}`);
}