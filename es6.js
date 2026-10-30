const student = {
    name: "alice",
    age: "22",
}
    student.name = "Jane Smith";
    student.age = 20;
    console.log(`Student name, ${student.name},age ${student.age} years old.`);
    console.log(`${student.age >= 18 ? "You are an adult." : "You are a minor."}`);

function helloworld() {
    console.log("Hello, World!");
}
helloworld();

function greet(name) {
    return "Hello, " + name + "!";
}

function introduce(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(introduce("Bob", 25));

// function circumference(radius) {
//     return 2 * Math.PI * radius;
// }
// console.log(`Circumference =: ${circumference(5)}`);

const circumference = (radius) => {
    return 2 * Math.PI * radius;
};
console.log(`Circumference =: ${circumference(5)}`);