//set document element variables
let menu = document.getElementById('slideout');
let toggleButton = document.getElementById('slideout-toggle');
let closeButton = document.getElementById('slideout-close');
let portfolioLink = document.querySelector('#portfolioLink');
let aboutLink = document.querySelector('#aboutLink');
let contactLink = document.querySelector('#contactLink');

//show slideout menu when menu button is clicked
toggleButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('onscreen');
});

//close menu when 'x' is clicked
closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('onscreen');
});

//close menu when any link is clicked
portfolioLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

aboutLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

contactLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});