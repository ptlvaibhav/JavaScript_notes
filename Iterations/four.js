const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
};

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}