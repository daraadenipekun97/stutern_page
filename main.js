let bars = document.querySelector(".cancel")
let menuNav = document.querySelector(".navbar")


bars.addEventListener("click" , hide)

function hide(){
  menuNav.classList.toggle('nav_toggle')

}