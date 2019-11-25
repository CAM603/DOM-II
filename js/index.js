// Your code goes here

// 1 Change text color of buttons with mouseover and mouseleave
let btn = document.querySelectorAll('.btn');

btn.forEach(el => {
    el.addEventListener('mouseover', event => event.target.style.backgroundColor = 'lightcyan');
    el.addEventListener('mouseleave', event => event.target.style.backgroundColor = '');
}); 

// 2 Have form appear when clicking sign up buttons

btn.forEach(el => {
    el.addEventListener('click', event => {
        let form = document.createElement('form');
        form.setAttribute('id', 'myForm');
        event.target.appendChild(form);

        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', 'Your name here');
        form.appendChild(input);
        
        event.target.insertAdjacentElement('afterend', form)
        
    })
});

// 3 Scroll to bottom and do something
let pic = document.querySelector('.content-destination img');
let nav = document.querySelector('.main-navigation');
let destinationBox = document.querySelectorAll('.destination')

window.addEventListener('scroll', () => {
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) >= scrollMax - 50) {
        pic.style.boxShadow = '5px 5px 5px black';
        nav.style.background = 'lightcyan';
        destinationBox.forEach(el => {
            el.style.border = 'dashed lightCyan 5px';
            el.style.padding = '10px';
            el.style.background = 'silver';
            el.style.boxShadow = '5px 5px 5px black'
        })
    } else {
        pic.style.boxShadow = '';
        nav.style.background = '';
        destinationBox.forEach(el => {
            el.style.border = '';
            el.style.padding = '';
            el.style.background = '';
            el.style.boxShadow = ''
        })
    }
});

// 4 Keydown to do change font colors
let p = document.querySelectorAll('p');
let colors = ['blue', 'red', 'green', 'orangeRed', 'purple', 'gold', 'silver', 'crimson', 'magenta', 'black'];

document.addEventListener('keydown', () => {
    p.forEach(el => el.style.color = colors[Math.round(Math.random() * (9 - 0) + 0)] );
});

// 5 








