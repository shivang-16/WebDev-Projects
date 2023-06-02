const homebtn = document.getElementById('home');
const homemenu = document.getElementById('homebox');

homebtn.addEventListener('mouseenter', showhomebox);
homebtn.addEventListener('mouseleave', hidehomebox);
homemenu.addEventListener('mouseenter', showhomebox);
homemenu.addEventListener('mouseleave', hidehomebox);
function showhomebox() {
    homebox.style.display = 'block';
}
function hidehomebox() {
    homebox.style.display = 'none';
}

const placebtn = document.getElementById('place');
const placemenu = document.getElementById('placebox');

placebtn.addEventListener('mouseenter', showplacebox);
placebtn.addEventListener('mouseleave', hideplacebox);
placemenu.addEventListener('mouseenter', showplacebox);
placemenu.addEventListener('mouseleave', hideplacebox);
function showplacebox() {
    placebox.style.display = 'block';
}
function hideplacebox() {
    placebox.style.display = 'none';
}

const hotelbtn = document.getElementById('hotel');
const hotelmenu = document.getElementById('hotelbox');

hotelbtn.addEventListener('mouseenter', showhotelbox);
hotelbtn.addEventListener('mouseleave', hidehotelbox);
hotelmenu.addEventListener('mouseenter', showhotelbox);
hotelmenu.addEventListener('mouseleave', hidehotelbox);
function showhotelbox() {
    hotelbox.style.display = 'block';
}
function hidehotelbox() {
    hotelbox.style.display = 'none';
}

const foodbtn = document.getElementById('food');
const foodmenu = document.getElementById('foodbox');

foodbtn.addEventListener('mouseenter', showfoodbox);
foodbtn.addEventListener('mouseleave', hidefoodbox);
foodmenu.addEventListener('mouseenter', showfoodbox);
foodmenu.addEventListener('mouseleave', hidefoodbox);
function showfoodbox() {
    foodbox.style.display = 'block';
}
function hidefoodbox() {
    foodbox.style.display = 'none';
}