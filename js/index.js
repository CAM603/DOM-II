// Your code goes here

// Change text color of buttons with mouseover and mouseleave
let btn = document.querySelectorAll('.btn');

btn.forEach(el => {
    el.addEventListener('mouseover', event => event.target.style.backgroundColor = '#BADA22');
    el.addEventListener('mouseleave', event => event.target.style.backgroundColor = '');
}); 
    