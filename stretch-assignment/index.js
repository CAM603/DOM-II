let rockets = document.querySelectorAll('.block');

let space = document.querySelector('.blocks');

// When clicked, send ship to top using for each

// rockets.forEach(el => {
//     el.addEventListener('click', () => {
//         space.prepend(el);
//     })
// })

//When clicked, send ship to top using event target
space.addEventListener('click', (event) => {
    event.stopPropagation();
    if(event.target.classList[0] === 'block') {
        space.prepend(event.target)
    } else {
        console.log('Try clicking on the rocket')
    }
})


rockets.forEach(el => {
    el.addEventListener('mouseover', (event) => {
        
        if (event.target.classList[0] === 'block') {
            let x = 0 ;
            setInterval(function() {
                x++
                event.target.style.position = 'relative';
                event.target.style.left = x+'px';
                console.log(event.target.style.left)
            }, 100);
        } else {
            console.log('Uh oh')
        }
    }, {once : true});
})
    
