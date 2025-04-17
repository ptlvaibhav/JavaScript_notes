const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val){
//     console.log(val);
// });

// coding.forEach(val => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// })

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
];

myCoding.forEach((item) =>{
    console.log(item.languageName);
})