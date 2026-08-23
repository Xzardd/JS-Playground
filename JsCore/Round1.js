let name = "Wiz";
let age = 23;
let balance = 1500;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Balance: ₹" + balance);

if (balance >= 1000) {
    console.log("You have enough money.");
} else {
    console.log("You need more money.");
}

let spend = 400;
balance = balance - spend;

console.log("You spent: ₹" + spend);
console.log("Remaining balance: ₹" + balance);

for (let i = 1; i <= 3; i++) {
    console.log("Transaction " + i);
}

function showBalance() {
    console.log("Current balance: ₹" + balance);
}

showBalance();