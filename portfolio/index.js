let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};
const mode=document.getElementById("mode");
const text=document.getElementById("text-dark");
const emoji=document.getElementById("emoji");
const header=document.getElementById("header");
const grid=document.getElementById("message");
const whole1=document.getElementById("grid-2");
const inputs = document.querySelectorAll("#whole-1 input");
const footer=document.getElementById("footer");
mode.addEventListener("click",()=>{
    if(document.body.style.backgroundColor==="antiquewhite"){
        emoji.textContent="☀️";
        text.textContent="Dark Mode"
        document.body.style.backgroundColor="#080808";
        text.style.color="white";
        header.style.backgroundColor="rgb(0, 0, 0,0.3) ";
header.style.backdropFilter="blur(10px)";
grid.style.backgroundColor="#080808";
footer.style.backgroundColor="#101010"
    }
   else{
    emoji.textContent="🌙";
        text.textContent="Light Mode";
        document.body.style.backgroundColor="antiquewhite";
        text.style.color="black";
header.style.backgroundColor = "rgba(236, 216, 184, 0.3)";
header.style.backdropFilter = "blur(10px)";
header.style.webkitBackdropFilter = "blur(10px)";
grid.style.backgroundColor="rgba(236, 216, 184, 0.6)";
footer.style.backgroundColor="rgba(236, 216, 184, 0.8)"
inputs.forEach(input => {
    input.style.color = "white";
    input.style.backgroundColor = "rgba(236, 216, 184, 0.6)";
});
   }
})