const menuBar=document.querySelector("#menu-bar");
const navBar=document.querySelector(".navbar");
const slides=document.querySelectorAll(".slide-container");
const prevSlide=document.querySelector("#prev");
const nextSlide=document.querySelector("#next");


menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
})

document.addEventListener("scroll",()=>{
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
})

let index=0;
nextSlide.addEventListener("click",nextSlider);
prevSlide.addEventListener("click",prevSlider);

function nextSlider(){
    slides[index].classList.remove('active');
    index=(index+1)% slides.length;
    slides[index].classList.add('active');
}

function prevSlider(){
    slides[index].classList.remove('active');
    index=(index-1)% slides.length;
    slides[index].classList.add('active');
}