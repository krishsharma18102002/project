// for mobile navigation

const btn=document.querySelector(".btn-mobile-nav");
const head=document.querySelector(".header-sec");

btn.addEventListener('click',function(){
    head.classList.toggle("open-nav");
});


