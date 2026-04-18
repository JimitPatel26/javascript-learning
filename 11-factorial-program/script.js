function findFactorial(number){
    let result = 1;
    for(let x = number ; x>1; x--){
        result = result * x;
    }
    return result;
}

console.log(findFactorial(3));

let n = 5;
let arr = [];
for(let i=1;i<=5;i++){
    arr.push(i);
}

let factorial = arr.reduce((a,b)=>{
    return a*b;
})

console.log(factorial);