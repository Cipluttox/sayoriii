const menuOpenButton = document.getElementById('button');
const navLink = document.getElementById('navlink');

menuOpenButton.addEventListener('click', () =>{
navLink.classList.toggle('active');
});