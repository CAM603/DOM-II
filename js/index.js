// Your code goes here

// Change text color of buttons with mouseover and mouseleave
let btn = document.querySelectorAll('.btn');

btn.forEach(el => {
    el.addEventListener('mouseover', event => event.target.style.backgroundColor = 'lightcyan');
    el.addEventListener('mouseleave', event => event.target.style.backgroundColor = '');
}); 

// Have form appear when clicking sign up buttons

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
})






