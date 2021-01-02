const sideNav = document.getElementById('sideNav');
const menuBtn = document.getElementById('menuBtn');
const imgBtn = document.querySelector('#menuBtn img');
sideNav.style.right = '-250px';
menuBtn.onclick = () => {
    sideNav.style.transition = '.4s'
    if (sideNav.style.right == '-250px') {
        sideNav.style.right = '0px';
        imgBtn.src = 'images/close.png';
    } else {
        sideNav.style.right = '-250px';
        imgBtn.src = 'images/menu.png';
    }
}

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
