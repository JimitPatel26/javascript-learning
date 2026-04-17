// ==========================================
// 1. Reverse a String
// Input: "jimit"
// Output: "timij"
// ==========================================

/*
let input = "jimit";
let output = "";
for(let x=input.length-1;x>=0;x--){
    output = output + input[x];
}
console.log(output);
*/


// ==========================================
// 2. Find Largest Number in Array
// Input: [3, 7, 2, 9, 5]
// Output: 9
// ==========================================

/*
function findMax(input){
    let max = input[0];
    for(let x=0;x<input.length;x++){
        if(input[x]>max){
            max = input[x];
        }
    }
    return max;
}

let input = [3,7,2,9,5];
console.log(findMax(input));
*/


// ==========================================
// 3. Remove Duplicates from Array
// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]
// ==========================================

/*
let input = [1,2,2,3,4,4,5];
let output = [];
let count = 0;
for(let x=0;x<input.length;x++){
    let exists = false;
    for(let j=0;j<output.length;j++){
        if(input[x] === output[j]){
            exists = true;
            break;
        }
    }

    if(!exists){
        output.push(input[x]);
    }
}
console.log(output);
*/


// ==========================================
// 4. Find Second Largest Number
// Input: [10, 5, 8, 20, 15]
// Output: 15
// ==========================================

/*
let input = [10,5,8,20,15];
let max = input[0];
let secondmax = input[0];
for(let x=0;x<input.length;x++){
    if(input[x]>max){
        max = input[x];
    }
    else if(input[x]>secondmax && input[x]!=max){
        secondmax = input[x];
    }
}
console.log(secondmax);
*/


// ==========================================
// 5. Find Missing Number
// Input: [1, 2, 3, 5]
// Output: 4
// ==========================================

/*
let input = [1, 2, 3, 5];
let total = 0;
for(let x = 1;x<=input[input.length-1];x++){
    total += x;
}
let sum = 0;
for(let x = 0;x<input.length;x++){
    sum += input[x];
}

if(sum!=total){
    console.log(total-sum);
}
*/


// ==========================================
// 6. Rotate Array
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// ==========================================

/*
let input = [1,2,3,4,5];
let k = 7;
let output = [];
if(k>input.length){
    k = k % input.length;
}
let count = k;
for(let x = 0;x<input.length;x++){
    if(x<k){
        output[x] = input[input.length+x-k];
    }
    else{
        output[count++] = input[x-k];
    }
}
console.log(output);
*/


// ==========================================
// 7. Group Words by Length
// Input: ["hi","by","hello","hey"]
// Output: {2:["hi","by"],3:["hey"],5:["hello"]}
// ==========================================

let input = ["hi","by","hello","hey"];
let output = {};

for (let word of input) {
    let len = word.length;
    
    if (!output[len]) {
        output[len] = [];
    }

    output[len].push(word);
}

console.log(output);