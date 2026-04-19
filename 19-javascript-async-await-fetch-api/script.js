// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Loaded");
//         },3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    let x =await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    let data = x.json();
    return data;
}

async function main() {
    console.log("Loading Modules");
    
    console.log("Do Something else");
    
    console.log("Load Data");
    
    let data = await getData();
    
    console.log(data);
    
    console.log("Process Data");
    
    console.log("task 2")
}

main();

// data.then((v)=>{
    
//     console.log(data);
    
//     console.log("Process Data");
    
//     console.log("task 2")
// })

