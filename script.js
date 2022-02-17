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

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image-1').src = src;
    });
  });
  
  document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
      var src = image_2.getAttribute('src');
      document.querySelector('.big-image-2').src = src;
    });
  });
  