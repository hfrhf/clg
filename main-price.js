

let NavUl = document.getElementById("nav-ul");
let BtnOpen = document.getElementById("menu");
let btnclose = document.getElementById("mobile-arrow");
let logo = document.getElementById("mobile-logo");
let login = document.getElementById("li-login");
let imgUl = document.querySelectorAll(".img-ul-mobile");

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
    imgUl.forEach(function(img) {
     
   
      img.classList.add("active-img");



});
    

}





let pricesM = document.getElementById("prices-med");


let NavScroll=document.getElementById("navbar")

window.onscroll=()=>{
  if(this.scrollY>=410){
    NavScroll.classList.add("active-nav")
    NavScroll.classList.remove("container");

    
    

  }else{
    NavScroll.classList.remove("active-nav")
    NavScroll.classList.add("container"); 
  
   
  


  }
  if (this.scrollY >= 400 && this.scrollY < 1600) {
    pricesM.classList.add("active-prices");
} else {
    pricesM.classList.remove("active-prices");
}
}



function toggleQuestion(buttonId, imageId) {
    let imgCl = document.getElementById(imageId);
    
    if (imgCl.src.endsWith("mines.png")) {
        imgCl.src = "img/plus.png"; // استبدلها بمسار الصورة الأصلية
    } else {
        imgCl.src = "img/mines.png"; // استبدلها بمسار الصورة المغلقة
    }
}

const questionIds = ['plusbtn', 'plusbtn1', 'plusbtn2', 'plusbtn3', 'plusbtn4', 'plusbtn5', 'plusbtn6', 'plusbtn7'];
const imageIds = ['img-cl', 'img-cl1', 'img-cl2', 'img-cl3', 'img-cl4', 'img-cl5', 'img-cl6', 'img-cl7'];

for (let i = 0; i < questionIds.length; i++) {
    document.getElementById(questionIds[i]).addEventListener('click', function () {
        toggleQuestion(questionIds[i], imageIds[i]);
    });
}





















