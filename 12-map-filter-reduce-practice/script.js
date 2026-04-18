/* =========================
   MAP QUESTIONS
========================= */

// 1. Square Numbers
// Input: [1,2,3,4]
// Output: [1,4,9,16]

// let input = [1,2,3,4];
// let output = input.map((val, idx, arr) => {
//     return val ** 2;
// });
// console.log(output);


// 2. Extract Names
// Input:
// [
//   {name: "Jimit", age: 20},
//   {name: "Mitesh", age: 22}
// ]
// Output: ["Jimit", "Mitesh"]

// let input = [
//     {name: "Jimit", age: 20},
//     {name: "Mitesh", age: 22}
// ];

// let names = input.map((value, idx, arr) => {
//     return value.name;
// });
// console.log(names);


// 3. Add "Mr." Prefix
// Input: ["jimit", "rahul"]
// Output: ["Mr. jimit", "Mr. rahul"]

// let input = ["jimit", "rahul"];

// let output = input.map((val, idx, arr) => {
//     return "Mr. " + val;
// });
// console.log(output);


// 4. Convert to Uppercase
// Input: ["hi", "hello"]
// Output: ["HI", "HELLO"]

// let input = ["hi", "hello"];

// let output = input.map((value, idx, arr) => {
//     return value.toUpperCase();
// });
// console.log(output);


// 5. Price with Tax (Important)
// Input: [100, 200, 300]
// Output: [118, 236, 354]

// let input = [100, 200, 300];

// let output = input.map((val, idx, arr) => {
//     return val + val * 0.18;
// });
// console.log(output);



/* =========================
   FILTER QUESTIONS
========================= */

// 6. Even Numbers
// Input: [1,2,3,4,5,6]
// Output: [2,4,6]

// let input = [1,2,3,4,5,6];

// let output = input.filter((value, idx, arr) => {
//     return value % 2 == 0;
// });
// console.log(output);


// 7. Age > 18

// let input = [
//     {name: "A", age: 17},
//     {name: "B", age: 20}
// ];

// let output = input.filter((val, idx, arr) => {
//     return val.age > 18;
// });
// console.log(output);


// 8. Words Longer Than 3 Letters
// Input: ["hi", "hello", "hey"]
// Output: ["hello"]

// let input = ["hi", "hello", "hey"];

// let output = input.filter((val, idx, arr) => {
//     return val.length > 3;
// });
// console.log(output);


// 9. Remove Falsy Values
// Input: [0, "hi", false, "", 5]
// Output: ["hi", 5]

// let input = [0, "hi", false, "", 5];

// let output = input.filter((val, idx, arr) => {
//     return Boolean(val);
// });
// console.log(output);


// 10. Filter Prime Numbers

// function isprime(number) {
//     let count = 0;

//     if (number == 1) {
//         return false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let input = [1,2,3,4,5,6];

// let output = input.filter((val, idx, arr) => {
//     return isprime(val);
// });

// console.log(output);



/* =========================
   REDUCE QUESTIONS
========================= */

// 11. Sum of Numbers
// Input: [1,2,3,4]
// Output: 10

// let input = [1,2,3,4];

// let output = input.reduce((a, b) => {
//     return a + b;
// });
// console.log(output);


// 12. Find Maximum
// Input: [10, 5, 20, 8]
// Output: 20

// let input = [10,5,20,8];

// let output = input.reduce((a, b) => {
//     return Math.max(a, b);
// });
// console.log(output);


// 13. Count Occurrences

// let input = ["a","b","a","c","b","a"];

// let output = input.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});
// console.log(output);



/* =========================
   GROUPING (ADVANCED REDUCE)
========================= */

// 14. Group Words by First Letter

let input = ["apple", "banana", "apricot", "blueberry"];

let output = input.reduce((acc, curr) => {
    let key = curr[0];

    if (!acc[key]) {
        acc[key] = [];
    }

    acc[key].push(curr);
    return acc;
}, {});

console.log(output);