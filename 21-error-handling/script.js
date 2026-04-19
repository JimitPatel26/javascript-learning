let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This is Not Allowed");
}
else{
    a = parseInt(a);
    b = parseInt(b);
    
    let sum = a+b;
    try {
        console.log("The Sum is : ",sum*x);
    } catch (error) {
        console.log("Error aa gaya bhai");
    }
    finally{
        console.log("Runs Always");
    }
}