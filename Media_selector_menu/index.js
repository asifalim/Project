const menuE1 = document.querySelector(".menu")
const menuTextE1 = document.querySelector(".menu p")
const socialListE1 = document.querySelector(".social-lists")
const liE1s = document.querySelectorAll(".social-lists li")

menuE1.addEventListener("click", ()=>{
    socialListE1.classList.toggle("hide");
    menuE1.classList.toggle("rotate");
})

liE1s.forEach(liE1=>{
    liE1.addEventListener("click", ()=>{
        menuTextE1.innerHTML = liE1.innerHTML;
        socialListE1.classList.add("hide");
        menuE1.classList.toggle("rotate");
    })
})