const SIDENAV = document.querySelector('#sidenav');
const OPENNAV = document.querySelector('.opennav');
const CLOSENAV = document.querySelector('.closenav');

function openNav(e) {
    e.preventDefault();
    SIDENAV.style.width = "250px";
}
  
function closeNav(e) {
    e.preventDefault();
    SIDENAV.style.width = "0";
}

OPENNAV.onclick = openNav;
CLOSENAV.onclick = closeNav;
