let a = [1, 93, 5, 6, 88]


for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

a.forEach((value,idx,arr)=>{
    console.log(value,idx,arr);
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

for (const value of a) {
    console.log(value)
}