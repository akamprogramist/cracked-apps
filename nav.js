let nav = document.querySelector('.nav');
let navListItem = document.querySelectorAll('.nav__link');

navListItem.forEach((link)=>link.addEventListener("click",listActive));

function listActive(){
    navListItem.forEach((link)=>link.classList.remove("active"));
    this.classList.add("active");
}