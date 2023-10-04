// Toggle Class Active Untuk Hamburger Menu
const navbarNav = document.querySelector
('.navbar-nav');

// Ketika Hamburger Menu Diklik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Class Active Untuk Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Klik Diluar Elemen
const hm = document.querySelector('#hamburger-menu');
const sb =document.querySelector('#search-button');

document.addEventListener('click' , function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});