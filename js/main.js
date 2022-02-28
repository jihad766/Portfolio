
// Vanilla tilt Effects
VanillaTilt.init(document.querySelectorAll(".header-social ul li a"), {
    max: 40,
    speed: 400,
    scale: 1.2
});

// Button Hover Effects
let ripple = function rippleEffect(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;

    this.style.setProperty('--x', x + 'px');
    this.style.setProperty('--y', y + 'px');
}

const aboutBtn = document.querySelector(".button");
aboutBtn.onmousemove = ripple;

let heroBtn = document.querySelector('.hero-btn button');
heroBtn.onmousemove = ripple;