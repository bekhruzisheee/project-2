const iks = document.querySelector("#iks");
const login = document.querySelector(".login");
const login2 = document.querySelector(".login2");
const container = document.querySelector(".container");
const kirilsin = document.querySelector(".kirilsin");
const kirilsin2 = document.querySelector(".kirilsin2");
const button3 = document.querySelector("#button3");
const obook = document.querySelector("#obook");
const x = document.querySelector("#x");
const catlog = document.querySelector(".catlog");
const kta = document.querySelector("#kta");


kirilsin.addEventListener("click",()=>{
    login.style = "display:block";
})
iks.addEventListener("click",()=>{
    login.style = "display:none";
})

obook.addEventListener("click", ()=>{
    obook.style = "display:none";
    x.style = "display:block";
    kta.style = "margin-left:-20px";
    catlog.style = "top:5px";
})
x.addEventListener("click", ()=>{
    x.style = "display:none";
    obook.style = "display:block";
    // kta.style = "margin-left:-20px";
    catlog.style = "top:-700px";
})


