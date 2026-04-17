let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length) // 5

console.log(arr[0]) // 5666
console.log(arr[2]) // 4
console.log(arr[4]) // 7

console.log(arr.toString()) // 5666,2,4,5,7
console.log(arr.join(" and ")) // 5666 and 2 and 4 and 5 and 7

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3));


let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2) // 2 and 3 will be deleted
console.log(numbers) 
numbers.splice(1, 3) // 2 and 3 and 4 will be deleted
console.log(numbers)
numbers.splice(1, 3, 222, 333)  // 2 and 3 and 4 will be replaced by 222 and 333 
// (4) [1, 222, 333, 5]