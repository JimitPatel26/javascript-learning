let btn = document.getElementById("btn");
let bx = document.querySelector(".box");
btn.addEventListener("click", () => {
    bx.innerHTML = "<b>You Are Clicked</b>";
});

btn.addEventListener("dblclick", () => {
    bx.innerHTML = "<b>You Just Clicked Button 2 times</b>";
});

btn.addEventListener("contextmenu",()=>{
    alert("Dont Hack Us by right click please");
});

document.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode);
})