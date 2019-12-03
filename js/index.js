// Your code goes here

// Prevent nav links from reloading page

let links = document.querySelectorAll('.nav-link');
links.forEach(el => el.addEventListener('click', event => event.preventDefault()))

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
        
    }, {once: true})
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
let colors = ['blue', 'red', 'green', 'orangeRed', 'purple', 'gold', 'dodgerBlue', 'crimson', 'magenta', 'black'];

document.addEventListener('keydown', () => {
    p.forEach(el => el.style.color = colors[Math.round(Math.random() * (9 - 0) + 0)] );
});

// 5 On load do something
//window.addEventListener('load', () => alert('Are you sure you want to enter Fun Bus'));

// 6 double clink nav links and do something
let homeP = document.createElement('p');
homeP.textContent = 'Hello, you are currently on the home page!';

let aboutP = document.createElement('p');
aboutP.textContent = 'We provide the best vacations at the best prices!';

let blogP = document.createElement('p');
blogP.textContent = 'We are currently looking for someone to write our blog. See contact info to reach us!';

let contactP1 = document.createElement('p');
let contactP2 = document.createElement('p');
contactP1.textContent = 'Phone: (123)456-7890'
contactP2.textContent = 'Email: funbus@myspace.com'

let contact = contactP1.appendChild(contactP2)

let header = document.querySelector('.intro')

let homeClicks = 0;
let aboutClicks = 0;
let blogClicks = 0;
let contactClicks = 0;

links[0].addEventListener('dblclick', () => {
    if (homeClicks === 0) {
        header.prepend(homeP);
        homeClicks += 1;
    } else {
        header.removeChild(homeP);
        homeClicks = 0;
    }
})
links[1].addEventListener('dblclick', () => {
    if (aboutClicks === 0) {
        header.prepend(aboutP);
        aboutClicks += 1;
    } else {
        header.removeChild(aboutP);
        aboutClicks = 0;
    }
})
links[2].addEventListener('dblclick', () => {
    if (blogClicks === 0) {
        header.prepend(blogP);
        blogClicks += 1;
    } else {
        header.removeChild(blogP);
        blogClicks = 0;
    }

})
links[3].addEventListener('dblclick', () => {
    if (contactClicks === 0) {
        header.prepend(contactP1);
        contactClicks += 1;
    } else {
        header.removeChild(contactP1);
        contactClicks = 0;
    }
})

// 7 Click nav and nav links without propagation
let navigation = document.querySelector('.nav')

links.forEach(el => el.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
    event.target.style.padding = '10px';
    event.target.style.color = 'white';
    event.stopPropagation();
}))

navigation.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
    
});

// 8 hide pictures when resizing window
let pics = document.querySelectorAll('img');

function hideImg() {
    pics.forEach(el => {
        el.style.display = 'none';
        setTimeout(function() {
            el.style.display = '';
        }, 1000)
    }) 
};

window.addEventListener('resize', hideImg);

// 9 Change flex direction on click

let navContainer = document.querySelector('.nav-container');

navContainer.addEventListener('click', event => event.target.style.flexDirection = 'column')

// 10 Do not allow copiers
let h2 = document.querySelectorAll('h2');

h2.forEach(el => el.addEventListener('copy', event => event.target.textContent = 'No copying!!!'))




