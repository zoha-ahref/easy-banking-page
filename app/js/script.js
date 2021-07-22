
const hamburgerButton = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburgerButton.addEventListener('click', function(){
    console.log("open hamburger");
    if(header.classList.contains('open')) { 
        body.classList.remove('noscroll');//Close Hamburger Menu
        header.classList.remove('open');
        
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        

    } else { //Open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        
    }
    


});
   
