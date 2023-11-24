var Navbar = document.querySelector('.nav-bar');
var MenuBar = document.querySelector('.menu-bar')
var MenuClose = document.querySelector('.menu-close')
var Body = document.querySelector('body')
var CompanyFeature = document.querySelector('.Company-dropdown')
var Features = document.querySelector('.Features-dropdown')
var NavLink =  document.querySelectorAll('ul a')

MenuBar.addEventListener('click', function(){
    MenuBar.style.display = 'none'; 
    MenuClose.style.display = 'block'; 
    Navbar.style.display = 'block'; 
    Body.style.backgroundColor = 'hsl(0, 0%, 41%)';
    
})

MenuClose.addEventListener('click', function(){
    Body.style.backgroundColor = 'transparent';
    MenuClose.style.display = 'none'; 
    Navbar.style.display = 'none'; 
    MenuBar.style.display = 'block'; 
})

Features.parentElement.firstElementChild.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.F-arrow-up').classList.toggle('clickOn')
    document.querySelector('.F-arrow-down').classList.toggle('clickOff')
    Features.parentElement.lastElementChild.classList.toggle('clickOn')
    })
CompanyFeature.parentElement.firstElementChild.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.C-arrow-up').classList.toggle('clickOn')
    document.querySelector('.C-arrow-down').classList.toggle('clickOff')
    CompanyFeature.parentElement.lastElementChild.classList.toggle('clickOn')
})


