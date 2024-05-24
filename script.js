


// document.querySelector(".res-nav").addEventListener("click", function() {
//   var navLinks = document.querySelector(".nav-links");
//   var bg = document.querySelector(".model-bg")
//   navLinks.classList.toggle("active");
//   bg.classList.toggle("model-active")
// });


const bars = document.querySelector(".res-nav");
const ul = document.querySelector(".nav-links");
const li = document.querySelectorAll(".nav-links li");
const bg = document.querySelector(".model-bg")

bars.addEventListener("click", (e) => {
  ul.classList.toggle("active");
  bg.classList.toggle("active")
  e.preventDefault();
});
