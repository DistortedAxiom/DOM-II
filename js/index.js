// MOUSE OVER - MOUSE OUT   (1 & 2)

/* Turn H2 elements to bold styling on hover */

const header2 = document.querySelectorAll('h2');

header2.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.style["font-weight"] = "bold";
    });
});

header2.forEach((el) => {
    el.addEventListener("mouseout", () => {
        el.style["font-weight"] = "normal";
    });
});

// LOAD  (3)

/* Ask for user name and add it to "Welcome to Fun Bus!" */

const welcomeh2 = document.querySelector('.intro h2');

window.addEventListener('load', () => {
    var val = prompt('What is your name?');
    welcomeh2.innerHTML = `Welcome to Fun Bus ${val}, press "n" to change background color!`
});

// KEY DOWN  (4)

const body = document.querySelector('body');

body.addEventListener('keydown', () => {
    if (event.key == 'n'){
        body.style.background = '#F1E6B4';
        body.style.color = 'black';
    }
});

// DOUBLE CLICK (5)

/* Add dotted borders around imgs on click */

const imgClick = document.querySelectorAll("img");

imgClick.forEach((el) => {
    el.addEventListener("dblclick", () => {
        el.style.border = "5px dotted red"
    })
})


// RESIZE (6)

/* Change bg to red on resize */

window.onresize = function(event) {
    body.style.background = "red";
}

// PREVENT DEFAULT / CLICK (7)

/* Console log when nav item is clicked */

const nav = document.querySelector('nav');

nav.addEventListener('click', function(){
    console.log(`You clicked a nav item!`);
    event.preventDefault();
});

// SCROLL (8)

/* Change color to purple on scroll */

window.addEventListener('scroll', function(){
    body.style.color = "purple";
});

// WHEEL (9)

/* Changes opacity of images on scroll */

imgClick.forEach((el) => {
    el.addEventListener("wheel", () => {
        el.style.opacity = "0.5";
        event.preventDefault();
    })
})

// SELECT (10)

/* Make p element italic went copied */

const paragraph = document.querySelectorAll('p');

paragraph.forEach((el) => {
    el.addEventListener("copy", () => {
        el.style["font-style"] = "italic";
        event.preventDefault();
    })
})


//STRETCH

const buttons = document.querySelectorAll(".btn");

buttons.forEach((el) => {
    el.addEventListener("mouseover", (event) => {
        TweenMax.to(".btn", 0.5, {height: 60, fontSize: 22});
    })
    el.addEventListener("mouseout", (event) => {
        TweenMax.to(".btn", 0.5, { height: 50, fontSize: 18});
    })
});
