//set document element variables
let menu = document.getElementById('slideout');
let toggleButton = document.getElementById('slideout-toggle');
let closeButton = document.getElementById('slideout-close');
let designPortfolioLink = document.getElementById('designPortfolioLink');
let devPortfolioLink = document.getElementById('devPortfolioLink');
let aboutLink = document.getElementById('aboutLink');
let contactLink = document.getElementById('contactLink');
let caseStudiesLink = document.getElementById('caseStudiesLink');

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
designPortfolioLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

devPortfolioLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

caseStudiesLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

aboutLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

contactLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

//Keep copyright year current
var todayDate = new Date();
var thisYear = todayDate.getFullYear();
document.getElementById('copyright-date').innerHTML = thisYear;