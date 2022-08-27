var elOpenBtn = document.querySelector(".site-header__open");
 
elOpenBtn.addEventListener("click" , function(){
    elOpenBtn.closest(".site-header").classList.toggle("site-header__nav-open")
})