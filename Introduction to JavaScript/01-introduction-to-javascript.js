// Introduction to JavaScript
// In this file, we will cover basic JavaScript concepts.

// 1.1 Variables
// Variables are used to store data values.
let name = "John"; // let is used to declare variables
const age = 30; // const is used to declare constants

console.log(name); // Output: John
console.log(age); // Output: 30

// 1.2 Data Types
// JavaScript supports various data types including strings, numbers, booleans, arrays, and objects.

let isStudent = true; // boolean
let scores = [90, 80, 70]; // array
let student = {
    name: "John",
    age: 30,
    isStudent: true
}; // object

console.log(isStudent); // Output: true
console.log(scores); // Output: [90, 80, 70]
console.log(student); // Output: {name: "John", age: 30, isStudent: true}

// 1.3 Functions
// Functions are blocks of code designed to perform particular tasks.

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice

// 1.4 Loops
// Loops are used to repeatedly run a block of code until a condition is met.

for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

// 1.5 Conditionals
// Conditional statements are used to perform different actions based on different conditions.

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
