const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu');

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');    
};

menu.addEventListener('click', mobileMenu);


//Paralax
var rellax = new Rellax('.rellax');

//Dark mode
const btnmode = document.querySelector('.btnmode');
const main = document.querySelector('.main');
const submain = document.querySelector('.submain');
const baer = document.querySelector('.baer');
const navbar = document.querySelector('.navbar');
const navbar_logo = document.querySelector('.navbar_logo');
const navbar_links = document.querySelector('.navbar_links');
const navbar_links2 = document.querySelector('.navbar_links2');
const navbar_links3 = document.querySelector('.navbar_links3');
const services = document.querySelector('.services');
const menulinksdark = document.querySelector('.navbar_menu');


btnmode.onclick = function()
    {
             this.classList.toggle('active')
             main.classList.toggle('active')
             submain.classList.toggle('active')
             baer.classList.toggle('active')
             navbar.classList.toggle('active')
             navbar_logo.classList.toggle('active')
             navbar_links.classList.toggle('active')
             navbar_links2.classList.toggle('active')
             navbar_links3.classList.toggle('active')
             services.classList.toggle('active')
             
         }