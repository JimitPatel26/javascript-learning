console.log("Jimit is a Hacker");
console.log("Mitesh is also a Hacker");

setTimeout(()=>{
    console.log("I am inside settimeout 1");
},1000);

setTimeout(()=>{
    console.log("I am inside settimeout 2");
},1000);

console.log("The end")

const callback = (args)=>{
    console.log(args);
}

const loadScript = (src,callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Jimit");
    document.head.append(sc);
}

loadScript("https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css",callback);