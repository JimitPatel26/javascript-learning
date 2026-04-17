/*
Create a business name generator by combining list of adjectives and shop name and another word


Adjectives : 
Crazy
Amazing
Fire

Shop Name :
Engine
Foods
Garments

Another Word :
Bros
Limited
Hub

*/

function generateRandom(){
    return Math.floor(Math.random()*3) + 1;
}

let businessName = "";
let adj = "";
let random = generateRandom();
if(random === 1){
    adj = "Crazy";
}
else if(random === 2){
    adj = "Amazing";
}
else{
    adj = "Fire"
}

random = generateRandom();
let shopname = ""
if(random === 1){
    shopname = "Engine";
}
else if(random === 2){
    shopname = "Foods";
}
else{
    shopname = "Garments"
}

let another = "";
random = generateRandom();
if(random === 1){
    another = "Bros";
}
else if(random === 2){
    another = "Limited";
}
else{
    another = "Hub";
}

businessName = adj + " " + shopname + " " + another;
console.log("Generated Business Name : "+businessName);