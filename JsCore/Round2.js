let name = "Wiz";
let age = 23;
let marks = 78;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Marks: " + marks);

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

let a = 10;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));

for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

function greet() {
    console.log("Hello " + name);
}

greet();let product = "Laptop";
let price = 85000;
let discount = 10;

let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log("Product: " + product);
console.log("Original Price: ₹" + price);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);

if (finalPrice <= 80000) {
    console.log("Good deal!");
} else {
    console.log("Still expensive.");
}

function showPrice() {
    console.log("You need ₹" + finalPrice + " to buy this.");
}

showPrice();