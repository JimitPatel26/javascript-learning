let a = "Jimit";
console.log(a[0]); // J
console.log(a[1]); // I
console.log(a[2]); // M
console.log(a[3]); // I
console.log(a[4]); // T
// console.log(a[5]); // undefined

console.log(a.length) // 5

let real_name = "Jimit" 
let friend = "Mitesh"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase()) // SHIVAMSH
console.log(b.toLowerCase())  // shivamsh
console.log(b.length) // 7
console.log(b.slice(1, 5)) // hiva 
console.log(b.slice(1)) //hivamSh

console.log(b.replace("Sh", "77")) // 77ivamSh
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)