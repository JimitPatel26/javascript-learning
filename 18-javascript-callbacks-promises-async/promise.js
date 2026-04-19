console.log("This is Promise");

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am Done");
            resolve("Jimit");
        },3000);
    }
})

let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you");
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am Done");
            resolve("Mietsh");
        },1000);
    }
})

let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})