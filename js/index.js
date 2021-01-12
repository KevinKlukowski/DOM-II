// Your code goes here
let Title = document.querySelector('h2');

Title.addEventListener('mouseover', function(event) {
    event.target.style.color = 'green';
});

let navi = document.querySelector('.nav-link');
const navi4 = navi.cloneNode(true);
navi4.textContent = '我的生活';
document.querySelector('.nav').appendChild(navi4);

navi4.addEventListener('dblclick', function(event) {
    const color = navi4.style.color;
    navi4.style.fontSize = '3rem';
    navi4.style.color = color === 'red' ? 'green': 'red';
    });

window.addEventListener('load', function(event) {
    //alert('Loading this webpage may harm your device')
})

let Dest = document.querySelector('.footer');

Dest.addEventListener('click', function(event) {
    alert('This is not an active link');
});

const nav1 = document.querySelector('.btn');
nav1.addEventListener('click', function(event) {
    alert('Yes I AM in fact a link but I do not in fact work');
});

document.addEventListener('mouseover', function(event) {
    console.log(event.clientX, event.clientY);
});

document.addEventListener('scroll', function(event) {
    if(event.key === 'A') {
        console.log('ahhhhh');
    }
})