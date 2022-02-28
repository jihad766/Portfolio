// // Navigation menu
// let body = document.querySelector("body");
// let menuBtn = document.querySelector(".menu-button");
// let canceBtn = document.querySelector(".cancel-btn");
// let navBar = document.querySelector(".navbar");

// menuBtn.onclick = function() {
//   menuBtn.style.opacity = '0';
//   menuBtn.style.pointerEvents = 'none';
//   navBar.classList.add("active");
// }
// canceBtn.onclick = function() {
//   menuBtn.style.opacity = '1';
//   menuBtn.style.pointerEvents = 'auto';
//   navBar.classList.remove("active");
// }

// // Sticky navb
// let val;
// let nav = document.querySelector("nav");
// let scrollBtn = document.querySelector(".scroll-button a");
// console.log(scrollBtn);

//   window.onscroll = function(){
//     if (document.documentElement.scrollTop > 20) {
//       nav.classList.add("sticky");
//       scrollBtn.style.display = "block";
//     }else{
//       nav.classList.remove("sticky");
//       scrollBtn.style.display = "none";
//     }
//   }


// // Side Navigation Bar Close While We Click On Navigation Links
// let navLinks = document.querySelectorAll(".menu li a");
// for (var i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click" , function() {
//     navBar.classList.remove("active");
//     menuBtn.style.opacity = "1";
//     menuBtn.style.pointerEvents = "auto";
//   });
// }


// Vanilla tilt Effects
VanillaTilt.init(document.querySelectorAll(".header-social ul li a"), {
  max: 40,
  speed: 400,
  scale: 1.2
});

// Button Hover Effects
const btn = document.querySelector(".button");

btn.onmousemove = function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

