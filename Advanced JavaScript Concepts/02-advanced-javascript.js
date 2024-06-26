// Advanced JavaScript Concepts
// In this file, we will cover various advanced JavaScript concepts.

// 2.1 Function Expressions
const square = function(number) {
    return number * number;
};
console.log(square(5)); // Output: 25

// 2.2 Arrow Functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// 2.3 Object Destructuring
const student = {
    name: "Alice",
    age: 25,
    isStudent: true
};
const { name, age, isStudent } = student;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(isStudent); // Output: true

// 2.4 Array Methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15

// 2.5 Promises and Async/Await
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("The operation was successful.");
    } else {
        reject("The operation failed.");
    }
});

promise
    .then(message => {
        console.log(message); // Output: The operation was successful.
    })
    .catch(message => {
        console.log(message);
    });

async function fetchData() {
    try {
        let response = await promise;
        console.log(response); // Output: The operation was successful.
    } catch (error) {
        console.log(error);
    }
}

fetchData();
