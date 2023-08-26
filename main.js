var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  focus  : 'center',
  direction: 'rtl' 
} );

splide.mount();



let NavUl = document.getElementById("nav-ul");
let BtnOpen = document.getElementById("menu");
let btnclose = document.getElementById("mobile-arrow");
let logo = document.getElementById("mobile-logo");
let login = document.getElementById("li-login");
let imgUl = document.querySelectorAll(".img-ul-mobile");
let NAM1=document.querySelectorAll(".navbar-a-m")
btnclose.onclick = () => {
    NavUl.classList.remove("active");
    logo.classList.remove("active-mobile-logo");
    btnclose.classList.remove("active-mobile-arrow");
    document.body.classList.remove("lock-scroll");
    login.style.display="none"


  
  
  
    
}

BtnOpen.onclick = () => {
    NavUl.classList.add("active");
    logo.classList.add("active-mobile-logo");
    btnclose.classList.add("active-mobile-arrow");
    login.style.display="block"
    document.body.classList.add("lock-scroll");
    NAM1.forEach((a)=>{
      a.style.color="white"
    })
    imgUl.forEach(function(img) {
     
   
      img.classList.add("active-img");



});
    

}




let NavScroll=document.getElementById("navbar")
let logoNav=document.getElementById("logo")
let logI=document.getElementById("log-i")
let logh2=document.getElementById("log-h2")
let NAM=document.querySelectorAll(".navbar-a-m")
let mn=document.getElementById("mn")
window.onscroll=()=>{
  if(this.scrollY>=300){
    NavScroll.classList.add("active-nav")
    logoNav.src="img/logo-dark.png"
    logI.style.color="#243261"
    logh2.style.color="#243261"
    mn.style.color="#243261"
    mn.src="img/menu-dark.png"
    NavScroll.classList.remove("container"); 
    NAM.forEach((a)=>{
      a.style.color="#243261"
    })
  }else{
    NavScroll.classList.remove("active-nav")
    logoNav.src="img/logo.png"
    logI.style.color="white"
    logh2.style.color="white"
    mn.src="img/solar_hamburger-menu-outline.png"
    NavScroll.classList.add("container"); 
    NAM.forEach((a)=>{
      a.style.color="white"
    })
  }
}

















