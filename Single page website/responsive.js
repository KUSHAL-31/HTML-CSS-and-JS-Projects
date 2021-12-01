burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav-list')
right_search = document.querySelector('.right-search')

burger.addEventListener('click', ()=>{
    right_search.classList.toggle('v-resp');
    nav_list.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');
})