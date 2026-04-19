// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// function generateRandom() {
//     return Math.floor(Math.random() * 4) + 1;
// }

// function selectHouse(arrOfNames) {
//     const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
//     let dict = {
//         "Gryffindor" : [],
//         "Hufflepuff" : [],
//         "Ravenclaw" : [],
//         "Slytherin" : []
//     }
//     for(let i=0;i<arrOfNames.length;i++){
//         if(arrOfNames[i].length<6){
//             dict["Gryffindor"].push(arrOfNames[i])
//         }
//         else if(arrOfNames[i].length<8){
//             dict["Hufflepuff"].push(arrOfNames[i])
//         }
//         else if(arrOfNames[i].length<12){
//             dict["Ravenclaw"].push(arrOfNames[i])
//         }
//         else{
//             dict["Slytherin"].push(arrOfNames[i])
//         }
//     }
//     console.log(dict);
// }

// selectHouse(['Jimit', "mitesh", "Suman", "Nihal", "Dharmil"]);

// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// arr = [1,1,2,3,4,4,5];
// result = [];
// for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];

//     while(arr[i] == arr[i+1]){
//         i++;
//     }
//     result.push(current*2);
// }

// console.log(result);


// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirror(str){
//     let mirror = "";
//     for(let x=str.length-1;x>=0;x--){
//         mirror += str[x];
//     }
//     return str+mirror;
// }

// console.log(mirror("Gujarat"))

// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function check(password){
//     let isValid = true;
//     let containUpper = false;
//     let containlower = false;
//     let containdigit = false;
//     let str = "H";
//     if(password.length<8){
//         isValid = false;
//     }
    
//     for(let x = 0 ; x<password.length ; x++){
//         if(password[x]>="A" && password[x]<="Z"){
//             containUpper = true;
//         }
//         if(password[x]>="a" && password[x]<='z'){
//             containlower = true;
//         }
//         if(password[x]>="0" && password[x]<="9"){
//             containdigit = true;
//         }
//     }

//     if(isValid && containUpper && containlower && containdigit){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check("Jimit123"))

// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumSelector(arr){
//     let sum = 0;
//     for(let x=0;x<arr.length;x++){
//         if(arr[x]<0){
//             break;
//         }
//         else{
//             sum += arr[x];
//         }
//     }
//     return sum;
// }

// console.log(sumSelector([1,2,3,-5,4]));

// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function vowelCounter(str){
//     str = str.toLowerCase();
//     let vc = 0;
//     for(let x=0;x<str.length;x++){
//         if(str[x]=="a" || str[x] == "e" || str[x] == "i" || str[x] =="o" || str[x] == "u"){
//             vc+=1;
//         }
//     }
//     return vc;
// }

// console.log(vowelCounter("JImit"));

// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// function saveNoteToLocalStorage(noteObj){
//     for(let key of Object.keys(noteObj)){
//         localStorage.setItem(key,noteObj[key]);
//     }
// }

// saveNoteToLocalStorage({
//     "Maths" : "Do Questions of PB from 1 to 40",
//     "COA" : "Do Questions of PB from 1 to 20",
//     "TOC" : "Do Questions of PB from 1 to 30"
// })

// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
// function multiplyByTwo(arr) {
//     return arr.map(num => 
//         new Promise(resolve => 
//             setTimeout(() => resolve(num * 2), 500)
//         )
//     );
// }

// async function main(){
//     let promises = multiplyByTwo([1,2,3,4,5]);
//     let result = await Promise.all(promises);
//     console.log(result);
// }
// main();

// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// async function placeOrder(){
//     let randomDelay = Math.floor(Math.random()*5)+1;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Order is Ready");
//         },randomDelay*1000);
//     });
// }

// async function main() {
//     let x =await placeOrder();
//     console.log(x);
// }

// main();

// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// async function brewCoffee(type){
//     let randomDelay = Math.floor(Math.random()*5)+1;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(type + " Coffee is Ready");
//         },randomDelay*1000);
//     });
// }

// async function main() {
//     let x =await brewCoffee("Cappuccino");
//     console.log(x);
// }

// main();


// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion

function filterProducts(productObjects){
    return productObjects.filter(val => {
        return val.price > 5000;
    });
}
const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 79999,
        category: "Electronics",
        inStock: true,
        rating: 4.8
    },
    {
        id: 2,
        name: "Nike Air Max",
        price: 5999,
        category: "Footwear",
        inStock: true,
        rating: 4.5
    },
    {
        id: 3,
        name: "MacBook Air M2",
        price: 114999,
        category: "Electronics",
        inStock: false,
        rating: 4.9
    },
    {
        id: 4,
        name: "Levi's Jeans",
        price: 2499,
        category: "Clothing",
        inStock: true,
        rating: 4.2
    },
    {
        id: 5,
        name: "Samsung Galaxy S23",
        price: 74999,
        category: "Electronics",
        inStock: true,
        rating: 4.6
    },
    {
        id: 6,
        name: "Adidas Hoodie",
        price: 3999,
        category: "Clothing",
        inStock: false,
        rating: 4.3
    },
    {
        id: 7,
        name: "Boat Headphones",
        price: 1999,
        category: "Electronics",
        inStock: true,
        rating: 4.1
    }
];


async function main(){
    let data = await filterProducts(products);
    console.log(data);
}

main();