var bigmac = document.querySelector(".bigmac");
var navmobile  = document.querySelector(".nav-mobile");

bigmac.addEventListener("click", function(){
    bigmac.classList.toggle("bigmac-active")
    navmobile.classList.toggle("nav-mobile-active")
})

