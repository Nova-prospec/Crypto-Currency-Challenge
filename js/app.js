
const hamburger = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".hidden-nav");
const closeBtn = document.querySelector(".close-icon");


$(".crypto-div").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})

hamburger.addEventListener("click", ()=>{
    openNav();
})
closeBtn.addEventListener("click", ()=>{
    closeNav();
})

function openNav() {
    hiddenNav.style.width = "100vw";
    hiddenNav.style.right = "0rem";
}   
function closeNav(){
    hiddenNav.style.width = "0px";
    hiddenNav.style.right = "-10rem";
}
AOS.init();