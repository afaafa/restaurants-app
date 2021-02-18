import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('.main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event => {
    if (drawer.style.display === "block") {
        drawer.style.display = "none";
      } else {
        drawer.style.display = "block";
      }
});
  
hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});
