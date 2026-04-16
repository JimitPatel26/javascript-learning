console.log("Faulty Calculator");

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

let random = Math.random();

if (random > 0.1) {
    console.log("Addition:", add(num1, num2));
    console.log("Subtraction:", sub(num1, num2));
    console.log("Multiplication:", mul(num1, num2));
    console.log("Division:", div(num1, num2));
} else {
    console.log("Addition:", sub(num1, num2));
    console.log("Subtraction:", div(num1, num2));
    console.log("Multiplication:", add(num1, num2));
    console.log("Division:", mul(num1, num2));
}