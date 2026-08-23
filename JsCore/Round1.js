let name = "Wiz";
let age = 23;
let city = "Chandigarh";

console.log("Hello, my name is " + name);
console.log("I am " + age + " years old");
console.log("I live in " + city);

let a = 10;
let b = 20;

let sum = a + b;
let difference = b - a;
let product = a * b;
let division = b / a;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Division: " + division);

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

function greet(name) {
    console.log("Welcome, " + name);
}

greet("Wiz");
greet("Alex");