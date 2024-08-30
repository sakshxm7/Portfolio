let daynight=document.querySelector(".daynight");
let banner=document.querySelector(".banner");
daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
});

let typingFx= new Typed("#text",{
    strings:["Frontent Developer.","Backend Developer."],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1200,
});

