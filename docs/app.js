const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');});
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
